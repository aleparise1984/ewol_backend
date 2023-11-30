import { PartialType } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateBootcampDto {
  @IsNotEmpty()
  @IsString()
  code: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  discord_url: string;

  @IsDate()
  @IsNotEmpty()
  date_start: Date;

  @IsNotEmpty()
  @IsDate()
  date_end: Date;
}

export class UpdateBootcampDto extends PartialType(CreateBootcampDto) {}
