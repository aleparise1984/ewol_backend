import { PartialType } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateModuleDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  code: string;

  @IsNotEmpty()
  @IsString()
  survey_url: string;

  @IsNotEmpty()
  @IsDate()
  date_start: Date;

  @IsNotEmpty()
  @IsDate()
  date_end: Date;

  @IsNotEmpty()
  @IsNumber()
  bootcamp_id: number;
}

export class UpdateModuleDto extends PartialType(CreateModuleDto) {}
