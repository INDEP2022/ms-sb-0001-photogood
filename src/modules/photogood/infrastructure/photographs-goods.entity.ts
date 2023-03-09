import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity('fotografias_bienes', { schema: 'sera' })
export class PhotographsGoodsEntity {
  @PrimaryColumn({
    type: 'numeric',
    name: 'no_bien',

    precision: 10,
  })
  id: number;

  @Column({
    type: 'bytea',
    name: 'fotografia',
  })
  Photography: number;

  @Column({
    type: 'numeric',
    name: 'no_registro',
  })
  recordNumber: number;
}
