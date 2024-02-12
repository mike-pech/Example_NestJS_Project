import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PromoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  image: string;

  @Column()
  title: string;

  @Column()
  description: string;
}
