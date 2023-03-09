import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity('fotos_bienes', { schema: 'sera' })
export class PhotoGoodEntity {
  @PrimaryColumn({
    type: 'character varying',
    name: 'carpeta',
    length: '100',
  })
  file: string;

  @PrimaryColumn({
    type: 'character varying',
    name: 'ubicacion',
    length: '150',
  })
  location: string;
}
