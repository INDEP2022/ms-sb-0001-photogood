import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity('bien_medio_fotografia', { schema: 'sera' })
export class MediumGoodPhotographyEntity {
  @PrimaryColumn({
    type: 'numeric',
    name: 'no_bien',
  })
  id: number;

  @Column({
    type: 'numeric',
    name: 'id_medio',

    precision: 2,
  })
  halfId: number;

  @Column({
    type: 'numeric',
    name: 'num_fotos',

    precision: 5,
  })
  photosNumber: number;
}
