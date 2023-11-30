import { StudentClassService } from './student_class.service';
import { CreateStudentClassDto, UpdateStudentClassDto } from './dto/student_class.dto';
export declare class StudentClassController {
    private readonly studentClassService;
    constructor(studentClassService: StudentClassService);
    create(data: CreateStudentClassDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, data: UpdateStudentClassDto): string;
    remove(id: string): string;
}
