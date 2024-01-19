import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
  Query,
} from "@nestjs/common";
import { StudentModuleService } from "./student_module.service";
import {
  CreateStudentModuleDto,
  UpdateStudentModuleDto,
} from "./dto/student_module.dto";

@Controller("student-module")
export class StudentModuleController {
  constructor(private readonly studentModuleService: StudentModuleService) {}

  @Post()
  create(@Body() data: CreateStudentModuleDto) {
    return this.studentModuleService.create(data);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() data: UpdateStudentModuleDto) {
    return this.studentModuleService.update(+id, data);
  }

  @Get("/student/:userId/module/:moduleId")
  async findOne(
    @Param("userId") userId: number,
    @Param("moduleId") moduleId: number
  ) {
    return await this.studentModuleService.findOne(moduleId, userId);
  }

  @Get()
  async findAll() {
    return await this.studentModuleService.findAll();
  }
}
