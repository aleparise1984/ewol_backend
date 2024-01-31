import { Module } from "@nestjs/common";
import { UserUserService } from "./user-user.service";
import { UserUserController } from "./user-user.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserUser } from "./entities/user-user.entity";
import { User } from "src/users/entities/users.entity";
import { Student } from "src/students/entities/student.entity";

@Module({
  imports: [TypeOrmModule.forFeature([UserUser, User, Student])],
  controllers: [UserUserController],
  providers: [UserUserService],
})
export class UserUserModule {}
