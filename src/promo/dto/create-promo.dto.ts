/* eslint-disable @typescript-eslint/no-inferrable-types */
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreatePromoDto {
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
  title: string = 'Название акции';

  @ApiPropertyOptional()
  @IsString()
  description?: string = 'Описание акции';
}
