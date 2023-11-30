import { ClassService } from './class.service';
export declare class ClassController {
    private readonly classService;
    constructor(classService: ClassService);
    findOne(id: string): Promise<import("./entities/class.entity").Class>;
}
