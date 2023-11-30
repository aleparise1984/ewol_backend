import { CreateStudentClassDto, UpdateStudentClassDto } from './dto/student_class.dto';
export declare class StudentClassService {
    create(data: CreateStudentClassDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, data: UpdateStudentClassDto): string;
    remove(id: number): string;
}
