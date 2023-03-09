import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity('fotoweb', { schema: 'sera' })
export class PhotowebEntity {
  @PrimaryColumn({
    type: 'character varying',
    name: 'id_inmueble',
    length: '255',
  })
  propertyId: string;

  @PrimaryColumn({
    type: 'numeric',
    name: 'id_foto',

    precision: 15,
  })
  photoId: number;

  @Column({
    type: 'character varying',
    name: 'detalle_foto',
    length: '255',
  })
  detailPhoto: string;

  @Column({
    type: 'character varying',
    name: 'foto',
    length: '255',
  })
  photo: string;

  @Column({
    type: 'numeric',
    name: 'no_bien',

    precision: 10,
  })
  goodNumber: number;
}
