import { Injectable } from '@nestjs/common';
import {
  CreateStudentClassDto,
  UpdateStudentClassDto,
} from './dto/student_class.dto';

@Injectable()
export class StudentClassService {
  create(data: CreateStudentClassDto) {
    return 'This action adds a new studentClass';
  }

  findAll() {
    return `This action returns all studentClass`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studentClass`;
  }

  update(id: number, data: UpdateStudentClassDto) {
    return `This action updates a #${id} studentClass`;
  }

  remove(id: number) {
    return `This action removes a #${id} studentClass`;
  }
}
