import { HttpStatus, Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { QueryStatusPhotoCatWebDto, QueryVcatwebDto } from './dto/query-fimgfotbieadd.dto';
import { QueryVcatwebHistDto } from './dto/query-fimgfotbieahistdto';
import { CRUDMessages } from 'src/shared/utils/message.enum';
import { LocalDate } from 'src/shared/local-date';

@Injectable()
export class ApplicationService {
    constructor(
        private readonly entity: Connection
    ) { }

    async queryVcatweb({ pGoodNumber, pPathBiefot }: QueryVcatwebDto) {
        try {
            const result = await this.entity.query(
                `SELECT COALESCE(MAX(PUBL_IMG_CAT_WEB),0) as V_CAT_WEB
                    FROM sera.BIENES_FOTO
                    WHERE NO_BIEN = '${pGoodNumber}' 
                    AND UBICACION = '${pPathBiefot}'`
            )

            return {
                statusCode: HttpStatus.OK,
                message: ['Busqueda existosa'],
                data: result
            };
        } catch (error) {
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: [error.message],
            };
        }
    }

    async queryStatusPhotoCatWeb({ goodNumber, lstFileImg }: QueryStatusPhotoCatWebDto) {
        try {
            const result = await this.entity.query(
                `select
                    PUBL_IMG_CAT_WEB as ESTATUS_FOTO_CAT_WEB
                from
                    sera.BIENES_FOTO
                where
                    NO_BIEN = '${goodNumber}'
                    and UBICACION = RTRIM(LTRIM('${lstFileImg}'))`
            )

            return {
                statusCode: HttpStatus.OK,
                message: ['Busqueda existosa'],
                data: result
            };
        } catch (error) {
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: [error.message],
            };
        }
    }

    async queryVgoodsPhotoPath() {
        try {
            const result = await this.entity.query(
                `select
                    NO_BIEN,
                    PUBL_IMG_CAT_WEB,
                    ID_INMUEBLE_CISI,
                    NO_EXPEDIENTE,
                    PATH_CARPETA,
                    TOTAL
                from
                    sera.V_BIENES_FOTO_PATH V
                where
                    exists (
                    select
                        1
                    from
                        sera.TMP_BIEN_FOTO TBF
                    where
                        TBF.NO_BIEN = V.NO_BIEN)`
            )

            return {
                statusCode: HttpStatus.OK,
                message: ['Busqueda existosa'],
                data: result
            };
        } catch (error) {
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: [error.message],
            };
        }
    }

    async pupExportPhotosGood() {
        try {
            const result = await this.entity.query(`
            SELECT  CONCAT('"', RUTA, '*.*"') AS PATH_ORIGEN, NO_BIEN
            FROM (
                SELECT NO_BIEN, LEFT(UBICACION, POSITION('/' IN REVERSE(UBICACION)) - 1) AS RUTA
                FROM sera.BIENES_FOTO BT
                WHERE NO_BIEN IN (SELECT NO_BIEN FROM sera.TMP_BIEN_FOTO)
            ) AS subquery
            GROUP BY RUTA, NO_BIEN;`)

            return {
                statusCode: HttpStatus.OK,
                message: ['Busqueda existosa'],
                data: result
            };
        } catch (error) {
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: [error.message],
            };
        }
    }

    async pupExportPhotosMasiv(id) {
        try {
            const result = await this.entity.query(`
            SELECT '"' || RUTA || '*.jpg"' AS PATH_ORIGEN, NO_BIEN
            FROM (
                SELECT NO_BIEN, LEFT(UBICACION, POSITION('/' IN REVERSE(UBICACION)) - 1) AS RUTA
                FROM sera.BIENES_FOTO BT
                WHERE NO_BIEN = ${id}				
            ) AS subquery
            GROUP BY RUTA, NO_BIEN;`)

            return {
                statusCode: HttpStatus.OK,
                message: ['Busqueda existosa'],
                data: result
            };
        } catch (error) {
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: [error.message],
            };
        }
    }
        async pupInsHistBienPhoto({pGoodNumber,consecNumber, newConsecNumber, user}: QueryVcatwebHistDto) {
        try {
            let V_CAT_WEB: number;
            let now = LocalDate.getNow('YYYY-MM-DD HH:mm:ss');
            let index = '\\\\165.128.172.66\\bankfots\\SIAB_F_01\\Imagenes';
            let consecgoodNumber
            let newserialConsecNumber
            let oldserialConsecNumber

            if (!isNaN(Number(pGoodNumber))) {
                consecgoodNumber = 'B' + pGoodNumber.toString().padStart(10, '0');
              }

            if (!isNaN(Number(newConsecNumber))) {
                newserialConsecNumber = 'F' + newConsecNumber.padStart(4, '0');
              }
            
            if (!isNaN(Number(consecNumber))) {
                oldserialConsecNumber = 'F' + consecNumber.padStart(4, '0');
              }
            
              let newlink = `${index}\\${consecgoodNumber}\\${consecgoodNumber}\\${newserialConsecNumber}.JPG`
              let oldlink = `${index}\\${consecgoodNumber}\\${consecgoodNumber}\\${oldserialConsecNumber}.JPG`
              console.log( newlink);
              console.log( oldlink);
            const select = await this.entity.query(`
                    SELECT coalesce (MAX(PUBL_IMG_CAT_WEB),0) as data
                    FROM sera.BIENES_FOTO
                    WHERE NO_BIEN = ${pGoodNumber} 
                    AND UBICACION = '${newlink}'; 
                   
                 `)
                 V_CAT_WEB = select[0].data
                 await this.entity.query(`INSERT INTO sera.HISTORICO_FOTOS_BIEN (NO_BIEN,
                    FEC_ELIMINA,
                    USUARIO_ELIMINA,
                    PUBL_IMG_CAT_WEB,
                    UBICACION_BIEN_FOTOS,
                    UBICACION_HISTORICO
                        )
                    VALUES (${pGoodNumber},
                    '${now}',
                    '${user}',
                    ${V_CAT_WEB},
                    '${newlink}',
                   ' ${oldlink}'
                    )
              `)

            return {
                statusCode: HttpStatus.OK,
                message: [CRUDMessages.CreateSuccess],
            };
        } catch (error) {
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: [error.message],
            };
        }
    }

    async pupInsListPhoto(id) {
        try {
            const result = await this.entity.query(`
            SELECT UBICACION
            FROM sera.BIENES_FOTO BF
            WHERE NOT EXISTS (SELECT 1
                            FROM siabinfo.BIENES_FOTO_INVALIDAS BFI
                            WHERE BFI.NO_BIEN = BF.NO_BIEN
                            AND BFI.NO_CONSEC = BF.NO_CONSEC)
            AND NO_BIEN = ${id}
            ORDER BY NO_CONSEC;`)
            return {
                statusCode: HttpStatus.OK,
                message: ['Busqueda existosa'],
                data: result
            };
        } catch (error) {
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: [error.message],
            };
        }
    }

    async pupGetsPhotos() {
        try {
            const result = await this.entity.query(`
            SELECT CONCAT('"', RUTA, '*.*"') AS PATH_ORIGEN, CONCAT('"C:\\\\SIABTMP\\\\BIENES_FOTO\\\\', NO_BIEN, '"\\ /Y /S /D /C /F') AS PATH_DESTINO
            FROM (
                SELECT NO_BIEN, SPLIT_PART(UBICACION, '\\\\', 1) || '\\\\' || SPLIT_PART(UBICACION, '\\\\', 2) || '\\\\' AS RUTA  
                FROM sera.BIENES_FOTO
                WHERE NO_BIEN IN (SELECT NO_BIEN
                                FROM sera.TMP_BIEN_FOTO)                                  
            ) AS subquery
            GROUP BY NO_BIEN, RUTA;`)
        
            return {
                statusCode: HttpStatus.OK,
                message: ['Busqueda existosa'],
                data: result
            };
        } catch (error) {
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: [error.message],
            };
        }
    }
}
