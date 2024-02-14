/* eslint-disable @typescript-eslint/no-inferrable-types */
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsNumberString } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    type: 'file',
    properties: {
      file: {
        type: 'string',
        format: 'binary',
      },
    },
  })
  image: Express.Multer.File;

  @ApiProperty()
  @IsString()
  title: string = 'Наименование товара';

  @ApiProperty()
  @IsString()
  description: string = 'Описание товара';

  @ApiProperty()
  @IsNumberString()
  price: string = 'Цена товара';

  @IsNumberString()
  categoryId: number;
}