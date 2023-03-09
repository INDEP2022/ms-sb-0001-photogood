import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
@Entity('bienes_foto_g', { schema: 'sae_nsbdb' })
export class GoodPhotoGEntity {
  @Column({
    type: 'numeric',
    name: 'no_bien',

    precision: 10,
  })
  goodNumber: number;

  @Column({
    type: 'numeric',
    name: 'no_consec',

    precision: 10,
  })
  consecNumber: number;

  @Column({
    type: 'date',
    name: 'fec_foto',
  })
  datePhoto: Date;

  @Column({
    type: 'character varying',
    name: 'ubicacion',
    length: '150',
  })
  location: string;

  @Column({
    type: 'date',
    name: 'fec_foto_hc',
  })
  datePhotoHc: Date;

  @Column({
    type: 'numeric',
    name: 'existe_nsbdb',
  })
  existsnsbdb: number;

  @Column({
    type: 'numeric',
    name: 'no_gestion',

    precision: 10,
  })
  numberManagement: number;

  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'id_aux',
  })
  id: number;
}
