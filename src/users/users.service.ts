import { HttpException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { DataSource, Repository } from "typeorm";
import { CreateUserDto, UpdateUserDto } from "./dto/users.dto";
import { User } from "./entities/users.entity";
import * as bcript from "bcrypt";
import { Role } from "./../auth/models/roles.model";

import { Student } from "./../students/entities/student.entity";
import { Public } from "src/auth/decorators/public.decorator";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private dataSource: DataSource
  ) {}

  async create(payload: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create(payload);
    const hashPassword = await bcript.hash(newUser.password, 10);
    newUser.password = hashPassword;
    await this.userRepository.save(newUser);
    return newUser;
  }

  async createStudent(payload: CreateUserDto): Promise<User> {
    const data = {
      students: {
        bootcamp_id: 1,
      },
      user: {
        ...payload,
        phone: "",
        password: await bcript.hash(payload.password, 10),
        role: Role.CANDIDATE_EWOL,
      },
    };

    const queryRunner = await this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const user = await queryRunner.manager.getRepository(User).findOne({
        where: { email: payload.email },
      });
      if (user) {
        throw new HttpException("User already exists", 400);
      }

      const newUser = await queryRunner.manager
        .getRepository(User)
        .save(data.user);
      if (!newUser) {
        throw new HttpException("User not created", 400);
      }

      const newStudent = await queryRunner.manager
        .getRepository(Student)
        .save({ ...data.students, user: newUser });

      if (!newStudent) {
        throw new HttpException("Student not created", 400);
      }
      await queryRunner.commitTransaction();
      return await this.findOne(newUser.id);
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new HttpException(error.message, 400);
    } finally {
      await queryRunner.release();
    }
  }

  findAll() {
    const users = this.userRepository.find();
    return users;
  }

  async findOneByEmail(email: string) {
    const user = await this.userRepository.findOne({
      where: { email },
    });

    return user;
  }

  async findCandidate() {
    return await this.userRepository.find({
      where: { role: Role.CANDIDATE_EWOL },
    });
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne({
      where: { id },
    });
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({
      where: { id },
    });

    if (updateUserDto.password) {
      const hashPassword = await bcript.hash(updateUserDto.password, 10);
      updateUserDto.password = hashPassword;
    }

    this.userRepository.merge(user, updateUserDto);
    const updatedUser = await this.userRepository.save(user);
    return updatedUser;
  }
}
