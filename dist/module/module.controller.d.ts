import { ModuleService } from './module.service';
import { CreateModuleDto, UpdateModuleDto } from './dto/module.dto';
export declare class ModuleController {
    private readonly moduleService;
    constructor(moduleService: ModuleService);
    create(data: CreateModuleDto): string;
    findAll(): string;
    findOne(id: string): Promise<import("./entities/module.entity").Module>;
    update(id: string, data: UpdateModuleDto): void;
    remove(id: string): string;
}
