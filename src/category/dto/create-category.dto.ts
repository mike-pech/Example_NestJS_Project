import { IsAlpha } from 'class-validator';

export class CreateCategoryDto {
  @IsAlpha()
  title: string;
}