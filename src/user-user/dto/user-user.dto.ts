import { IsNumber } from "class-validator";
import { User } from "src/users/entities/users.entity";

export class CreateUserUserDto {
  @IsNumber()
  user: User;

  @IsNumber()
  relatedUser: User;
}
