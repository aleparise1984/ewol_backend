import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateStudentModuleDto {
  @IsNotEmpty()
  @IsNumber()
  student_id: number;
  @IsNotEmpty()
  @IsNumber()
  moodule_id: number;
  @IsString()
  project_url: string;
  @IsString()
  project_feedback: string;
  @IsString()
  survey_response: string;
}

export class UpdateStudentModuleDto extends PartialType(
  CreateStudentModuleDto,
) {}
