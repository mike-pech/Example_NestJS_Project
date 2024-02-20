import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty({ default: 'john-doe' })
  username: string;

  @IsString()
  @ApiProperty()
  password: string;
}
