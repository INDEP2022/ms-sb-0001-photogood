import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('contenedor_fotossiab', { schema: 'sera' })
export class ContainerPhotossiabEntity {
  @Column({
    type: 'character varying',
    name: 'ubicacion',
    length: '100',
  })
  location: string;

  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'id',
  })
  id: number;
}
