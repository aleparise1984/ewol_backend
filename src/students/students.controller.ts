import { Controller, Get, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentsService } from './students.service';
import { UpdateStudentDto } from './dto/student.dto';
import axios from 'axios';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get('/typeform/:formId')
  async getResponses(@Param('formId') formId: string) {
    return await this.studentsService.typeformResponse(formId);
  }

  @Get()
  async findAll() {
    return await this.studentsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.studentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentsService.update(+id, updateStudentDto);
  }
}
