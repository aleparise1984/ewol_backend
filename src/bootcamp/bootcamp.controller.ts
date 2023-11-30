import { Controller, Get, Body, Patch, Param } from '@nestjs/common';
import { BootcampService } from './bootcamp.service';
import { UpdateBootcampDto } from './dto/bootcamp.dto';

@Controller('bootcamp')
export class BootcampController {
  constructor(private readonly bootcampService: BootcampService) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.bootcampService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBootcampDto: UpdateBootcampDto,
  ) {
    return this.bootcampService.update(+id, updateBootcampDto);
  }
}
