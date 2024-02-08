import { IsAlpha, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  // @IsAlpha()
  title: string;
}