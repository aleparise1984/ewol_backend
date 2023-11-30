import { Injectable } from '@nestjs/common';
import { CreateModuleDto, UpdateModuleDto } from './dto/module.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Module } from './entities/module.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ModuleService {
  constructor(
    @InjectRepository(Module)
    private moduleRepository: Repository<Module>,
  ) {}

  create(data: CreateModuleDto) {
    return 'This action adds a new module';
  }

  findAll() {
    return `This action returns all module`;
  }

  async findOne(id: number) {
    return await this.moduleRepository.findOne({
      where: { id },
      relations: ['class', 'class.student_class', 'student_modules'],
      order: {
        id: 'DESC',
        class: {
          id: 'ASC',
        },
      },
    });
  }

  update(id: number, data: UpdateModuleDto) {}

  remove(id: number) {
    return `This action removes a #${id} module`;
  }
}
