import { PartialType } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateStudentClassDto {
  @IsNotEmpty()
  @IsNumber()
  student_id: number;

  @IsNotEmpty()
  @IsNumber()
  class_id: number;

  @IsNotEmpty()
  @IsBoolean()
  assistence: boolean;
}

export class UpdateStudentClassDto extends PartialType(CreateStudentClassDto) {}
