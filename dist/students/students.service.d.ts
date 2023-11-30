import { Repository } from 'typeorm';
import { UpdateStudentDto } from './dto/student.dto';
import { Student } from './entities/student.entity';
export declare class StudentsService {
    private studentRepository;
    constructor(studentRepository: Repository<Student>);
    findAll(): Promise<Student[]>;
    findOne(id: number): Promise<Student>;
    update(id: number, payload: UpdateStudentDto): Promise<void | Student>;
    typeformResponse(userForm: string): Promise<any>;
}
