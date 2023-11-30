import { UpdateBootcampDto } from './dto/bootcamp.dto';
import { Repository } from 'typeorm';
import { Bootcamp } from './entities/bootcamp.entity';
export declare class BootcampService {
    private readonly bootcampRepository;
    constructor(bootcampRepository: Repository<Bootcamp>);
    findOne(id: number): Promise<Bootcamp>;
    update(id: number, updateBootcampDto: UpdateBootcampDto): string;
}
