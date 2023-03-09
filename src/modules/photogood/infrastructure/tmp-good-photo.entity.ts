import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
@Entity('tmp_bien_foto', { schema: 'sera' })
export class TmpGoodPhotoEntity {
  @Column({
    type: 'numeric',
    name: 'no_bien',

    precision: 10,
  })
  goodNumber: number;

  @Column({
    type: 'character varying',
    name: 'foto',
    length: '2',
  })
  photo: string;

  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'id',
  })
  id: number;
}
