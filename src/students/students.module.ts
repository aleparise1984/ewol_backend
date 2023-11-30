import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { User } from './../users/entities/users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Bootcamp } from 'src/bootcamp/entities/bootcamp.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student, User, Bootcamp])],
  controllers: [StudentsController],
  providers: [StudentsService],
  exports: [StudentsService],
})
export class StudentsModule {}
