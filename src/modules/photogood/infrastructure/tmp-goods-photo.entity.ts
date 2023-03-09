import {Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";
    @Entity("tmp_bienes_foto", { schema: "sera" })
    export class TmpGoodsPhotoEntity {
        
      @Column({
          type: 'numeric',
          name: 'id_control',
          
          precision: 5
      })
      controlId: number;
      
      @Column({
          type: 'numeric',
          name: 'no_bien',
          
          precision: 10
      })
      goodNumber: number;
      
      @Column({
          type: 'numeric',
          name: 'id_bien',
          
          precision: 10
      })
      goodId: number;
      
      @Column({
          type: 'numeric',
          name: 'no_consec',
          
          precision: 4
      })
      consecNumber: number;
      
      @Column({
          type: 'character varying',
          name: 'path_ubicacion',
          length: '200',
          
      })
      pathLocation: string;
      
      @Column({
          type: 'character varying',
          name: 'carpeta_gral',
          length: '80',
          
      })
      filegral: string;
      
      @Column({
          type: 'character varying',
          name: 'carpeta_bien',
          length: '80',
          
      })
      fileGood: string;
      
      @Column({
          type: 'date',
          name: 'fecha_migracion',
          
          
      })
      dateMigration: Date;
      
      @Column({
          type: 'numeric',
          name: 'estatus_migra',
          
          
      })
      statusmigrate: number;
      
      @Column({
          type: 'character varying',
          name: 'origen',
          length: '30',
          
      })
      origin: string;
      
      @Column({
          type: 'numeric',
          name: 'size_fs',
          
          precision: 15
      })
      sizefs: number;
      
      @PrimaryGeneratedColumn({
          type: 'integer',
          name: 'id',
      })
      id: number;
      
    }