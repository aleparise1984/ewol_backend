import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersService } from './users.service';
import { UsersController } from './users.controller';

import { User } from './entities/users.entity';
import { StudentsModule } from './../students/students.module';
import { Student } from './../students/entities/student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Student]), StudentsModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
