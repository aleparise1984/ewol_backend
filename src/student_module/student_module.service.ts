import { Injectable } from "@nestjs/common";
import {
  CreateStudentModuleDto,
  UpdateStudentModuleDto,
} from "./dto/student_module.dto";
import { StudentModule } from "./entities/student_module.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class StudentModuleService {
  constructor(
    @InjectRepository(StudentModule)
    private studentModuleRepository: Repository<StudentModule>
  ) {}

  async create(data: CreateStudentModuleDto) {
    await this.studentModuleRepository.save(data);
  }

  async findOne(moduleId: number, userId: number) {
    const data = await this.studentModuleRepository.findOne({
      where: {
        moodule: { id: moduleId },
        student: {
          user: {
            id: userId,
          },
        },
      },
      relations: ["student", "moodule", "student.user"],
    });

    return data;
  }

  async findAll() {
    return await this.studentModuleRepository.find({
      relations: ["student", "moodule"],
    });
  }

  async update(id: number, data: UpdateStudentModuleDto) {
    await this.studentModuleRepository.update(id, data);
  }
}
