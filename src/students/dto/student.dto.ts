import { PartialType } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  test_url: string;

  @IsBoolean()
  test_result: boolean;

  @IsNotEmpty()
  @IsString()
  typeform_url: string;

  @IsBoolean()
  typeform_result: boolean;

  @IsNotEmpty()
  @IsNumber()
  bootcamp_id: number;

  @IsNotEmpty()
  @IsNumber()
  user_id: number;
}

export class UpdateStudentDto extends PartialType(CreateStudentDto) {}
