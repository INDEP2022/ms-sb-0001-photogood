import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity('bienes_foto', { schema: 'sera' })
export class GoodPhotoEntity {
  @PrimaryColumn({
    type: 'numeric',
    name: 'no_bien',
  })
  goodNumber: number;

  @PrimaryColumn({
    type: 'numeric',
    name: 'no_consec',
  })
  consecNumber: number;

  @Column({
    type: 'timestamp without time zone',
    name: 'fec_foto',
  })
  photoDate: number;

  @Column({
    type: 'character varying',
    name: 'ubicacion',
    length: '150',
  })
  location: string;

  @Column({
    type: 'double precision',
    name: 'no_registro',

    precision: 10,
  })
  recordNumber: number;

  @Column({
    type: 'timestamp without time zone',
    name: 'fec_foto_hc',
  })
  photoDateHc: number;

  @Column({
    type: 'numeric',
    name: 'publ_img_cat_web',
  })
  publicImgcatWeb: number;

  @Column({
    type: 'numeric',
    name: 'existe_fs',
  })
  existsfs: number;

  @Column({
    type: 'numeric',
    name: 'existe_prod',
  })
  existsproduction: number;
  

  @Column('character varying', {
    name: 'usuario_creacion',
    length: 50
  })
  userCreation: string;
}
