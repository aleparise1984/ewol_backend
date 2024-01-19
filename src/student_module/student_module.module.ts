import { Module } from "@nestjs/common";
import { StudentModuleService } from "./student_module.service";
import { StudentModuleController } from "./student_module.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StudentModule } from "./entities/student_module.entity";
import { Module as Moodule } from "./../module/entities/module.entity";
import { Student } from "src/students/entities/student.entity";
import { User } from "src/users/entities/users.entity";

@Module({
  imports: [TypeOrmModule.forFeature([StudentModule, Student, Moodule])],
  controllers: [StudentModuleController],
  providers: [StudentModuleService],
})
export class StudentModuleModule {}
