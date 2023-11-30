import { Class } from './entities/class.entity';
import { Repository } from 'typeorm';
export declare class ClassService {
    private classRepository;
    constructor(classRepository: Repository<Class>);
    findOne(id: number): Promise<Class>;
}
