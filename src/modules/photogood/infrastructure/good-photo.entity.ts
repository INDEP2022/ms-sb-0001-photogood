import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity('bienes_foto', { schema: 'sera' })
export class GoodPhotoEntity {
  @PrimaryColumn({
    type: 'numeric',
    name: 'no_bien',

    precision: 10,
  })
  goodNumber: number;

  @PrimaryColumn({
    type: 'numeric',
    name: 'no_consec',

    precision: 10,
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

    precision: 16,
  })
  publicImgcatWeb: number;

  @Column({
    type: 'numeric',
    name: 'existe_fs',

    precision: 16,
  })
  existsfs: number;

  @Column({
    type: 'numeric',
    name: 'existe_prod',

    precision: 16,
  })
  existsproduction: number;
}
