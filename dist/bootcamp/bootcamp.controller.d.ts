import { BootcampService } from './bootcamp.service';
import { UpdateBootcampDto } from './dto/bootcamp.dto';
export declare class BootcampController {
    private readonly bootcampService;
    constructor(bootcampService: BootcampService);
    findOne(id: string): Promise<import("./entities/bootcamp.entity").Bootcamp>;
    update(id: string, updateBootcampDto: UpdateBootcampDto): string;
}
