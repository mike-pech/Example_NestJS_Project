import { CategoryEntity } from 'src/category/entities/category.entity';
import { Entity, Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product')
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  image: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @ManyToOne(() => CategoryEntity, (category) => category.product, { eager: true })
  @JoinColumn()
  category: CategoryEntity;
}