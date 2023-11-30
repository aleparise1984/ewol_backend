import { Module } from '@nestjs/common';
import { ClassService } from './class.service';
import { ClassController } from './class.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Class } from './entities/class.entity';
import { Module as Moodule } from 'src/module/entities/module.entity';
import { StudentClass } from 'src/student_class/entities/student_class.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Class, Moodule, StudentClass])],
  controllers: [ClassController],
  providers: [ClassService],
})
export class ClassModule {}
