import { Injectable } from '@nestjs/common';
import { CreateBootcampDto, UpdateBootcampDto } from './dto/bootcamp.dto';
import { Repository } from 'typeorm';
import { Bootcamp } from './entities/bootcamp.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BootcampService {
  constructor(
    @InjectRepository(Bootcamp)
    private readonly bootcampRepository: Repository<Bootcamp>,
  ) {}

  async findOne(id: number) {
    const bootcamp = await this.bootcampRepository.findOne({
      where: { id },
      relations: ['moodule', 'moodule.module_items'],
      order: {
        moodule: {
          id: 'ASC',
          module_items: {
            id: 'ASC',
          },
        },
      },
    });

    return bootcamp;
  }

  update(id: number, updateBootcampDto: UpdateBootcampDto) {
    return `This action updates a #${id} bootcamp`;
  }
}
