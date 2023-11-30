import { CreateStudentModuleDto, UpdateStudentModuleDto } from './dto/student_module.dto';
import { StudentModule } from './entities/student_module.entity';
import { Repository } from 'typeorm';
export declare class StudentModuleService {
    private studentModuleRepository;
    constructor(studentModuleRepository: Repository<StudentModule>);
    create(data: CreateStudentModuleDto): Promise<void>;
    findOne(moduleId: number, userId: number): Promise<StudentModule>;
    findAll(): Promise<StudentModule[]>;
    update(id: number, data: UpdateStudentModuleDto): Promise<void>;
}
