import { Controller, Get, Param } from '@nestjs/common';
import { ClassService } from './class.service';

@Controller('class')
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.classService.findOne(+id);
  }
}
