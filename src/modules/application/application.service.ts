import { HttpStatus, Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { QueryStatusPhotoCatWebDto, QueryVcatwebDto } from './dto/query-fimgfotbieadd.dto';

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
}
