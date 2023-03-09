import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
    @Entity("ctrl_bienes_foto", { schema: "sera" })
    export class CtrlGoodsPhotoEntity {
        
      @PrimaryGeneratedColumn({
          type: 'numeric',
          name: 'id_control',

      })
      id: number;
      
      @Column({
          type: 'character varying',
          name: 'carpeta_gral',
          length: '80',
          
      })
      filegral: string;
      
      @Column({
          type: 'character varying',
          name: 'carpeta_proceso',
          length: '80',
          
      })
      fileProcess: string;
      
      @Column({
          type: 'numeric',
          name: 'estatus',
          
          
      })
      status: number;
      
      @Column({
          type: 'date',
          name: 'fecha_proceso',
          
          
      })
      dateProcess: Date;
      
      @Column({
          type: 'smallint',
          name: 'estatus_ktl',
          
          precision: 16
      })
      statusktl: number;
      
    }