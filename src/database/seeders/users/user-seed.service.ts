import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Role } from "src/auth/models/roles.model";
import { User } from "src/users/entities/users.entity";
import { UsersService } from "src/users/users.service";
import { Repository } from "typeorm";
import * as bcript from "bcrypt";

@Injectable()
export class UserSeedService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly userService: UsersService
  ) {}

  async run() {
    const users = await this.userRepository.find();
    if (users.length === 0) {
      await this.userRepository.save([
        {
          full_name: "John Doe",
          email: "jonhDoe@mail.com",
          password: await bcript.hash("1234567", 10),
          phone: "123456789",
          role: Role.STUDENT_EWOL,
        },
      ]);
    }
    await this.userService.createStudent({
      full_name: "Jane Doe",
      email: "janeDoe@mail.com",
      password: await bcript.hash("1234567", 10),
      phone: "123456789",
      role: undefined,
      isConfirmed: false,
      student: {
        bootcamp_id: 1,
        user_id: undefined,
        test_result: undefined,
        test_url: undefined,
        typeform_result: undefined,
        typeform_url: undefined,
      },
      calendly: "",
      wallet: "",
    });
  }
}
