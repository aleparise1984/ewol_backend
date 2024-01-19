import { HttpException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { IsNull, Not, Repository } from "typeorm";
import { UpdateStudentDto } from "./dto/student.dto";
import { Student } from "./entities/student.entity";
import { Role } from "src/auth/models/roles.model";
import axios from "axios";

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>
  ) {}

  findAll() {
    return this.studentRepository.find({
      relations: ["user"],
      where: {
        user: {
          role: Role.CANDIDATE_EWOL,
        },
        test_result: Not(IsNull()),
      },
    });
  }

  async findOne(id: number) {
    const student = await this.studentRepository.findOne({
      relations: ["user"],
      where: { user: { id } },
    });

    return student;
  }

  async update(id: number, payload: UpdateStudentDto) {
    const student = await this.studentRepository.findOne({
      relations: ["user"],
      where: {
        id,
      },
    });

    if (!student) {
      return console.log("Student not found");
    } else {
      const updateStudent = await this.studentRepository.merge(
        student,
        payload
      );

      return await this.studentRepository.save(updateStudent);
    }
  }

  async typeformResponse(userForm: string) {
    const formId = "Gh5zui2c";
    // const apiKey = 'A8PT2zVkPe4QExEGyDCvin1xrRwZwaRRhN2sKerg9PqU';
    const apiKey =
      "tfp_H8m8853rN2JUGhJ5tnYHfapLQr1jE7ebNvXXK5UmhqpJ_3sp7nUuAqeYdb8";

    const apiUrl = `https://api.typeform.com/forms/${formId}/responses?pageSize=1000`;

    try {
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });

      const filteredResponse = response.data.items.find(
        (item) => item.response_id === userForm
      );

      if (filteredResponse) {
        return filteredResponse; // Devuelve el elemento encontrado
      } else {
        throw new Error(
          "No se encontró ningún elemento con el response_id proporcionado."
        );
      }
    } catch (error) {
      console.error("Error al obtener las respuestas: ", error);
      throw new Error("No se pudieron obtener las respuestas");
    }
  }
}
