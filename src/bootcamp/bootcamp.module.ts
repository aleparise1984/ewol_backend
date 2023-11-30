import { Module } from '@nestjs/common';
import { BootcampService } from './bootcamp.service';
import { BootcampController } from './bootcamp.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from 'src/students/entities/student.entity';
import { Bootcamp } from './entities/bootcamp.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bootcamp, Student])],
  controllers: [BootcampController],
  providers: [BootcampService],
})
export class BootcampModule {}
