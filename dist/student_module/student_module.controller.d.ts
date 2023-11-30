import { StudentModuleService } from './student_module.service';
import { CreateStudentModuleDto, UpdateStudentModuleDto } from './dto/student_module.dto';
export declare class StudentModuleController {
    private readonly studentModuleService;
    constructor(studentModuleService: StudentModuleService);
    create(data: CreateStudentModuleDto): Promise<void>;
    update(id: string, data: UpdateStudentModuleDto): Promise<void>;
    findOne(userId: number, moduleId: number): Promise<import("./entities/student_module.entity").StudentModule>;
    findAll(): Promise<import("./entities/student_module.entity").StudentModule[]>;
}
