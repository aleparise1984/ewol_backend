import { Injectable } from '@nestjs/common';
import { CreateClassDto, UpdateClassDto } from './dto/class.dto';
import { Class } from './entities/class.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ClassService {
  constructor(
    @InjectRepository(Class)
    private classRepository: Repository<Class>,
  ) {}

  async findOne(id: number) {
    return await this.classRepository.findOne({
      where: { id },
      relations: ['moodule'],
    });
  }
}
