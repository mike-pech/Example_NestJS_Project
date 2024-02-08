import { ApiProperty } from '@nestjs/swagger';
import {
  CreateDateColumn,
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('category')
export class CategoryEntity {
  // @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  title: string;

  // @ApiProperty()
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
