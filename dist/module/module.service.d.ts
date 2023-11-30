import { CreateModuleDto, UpdateModuleDto } from './dto/module.dto';
import { Module } from './entities/module.entity';
import { Repository } from 'typeorm';
export declare class ModuleService {
    private moduleRepository;
    constructor(moduleRepository: Repository<Module>);
    create(data: CreateModuleDto): string;
    findAll(): string;
    findOne(id: number): Promise<Module>;
    update(id: number, data: UpdateModuleDto): void;
    remove(id: number): string;
}
