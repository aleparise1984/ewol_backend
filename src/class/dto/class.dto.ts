import { PartialType } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateClassDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  video_url: string;

  @IsNotEmpty()
  @IsString()
  pdf_url: string;

  @IsNotEmpty()
  @IsDate()
  date_start: Date;

  @IsNotEmpty()
  @IsNumber()
  module_id: number;
}

export class UpdateClassDto extends PartialType(CreateClassDto) {}
