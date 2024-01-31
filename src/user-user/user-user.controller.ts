import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { UserUserService } from "./user-user.service";
import { CreateUserUserDto } from "./dto/user-user.dto";

@Controller("user-user")
export class UserUserController {
  constructor(private readonly userUserService: UserUserService) {}

  @Post()
  create(@Body() createUserUserDto: CreateUserUserDto) {
    return this.userUserService.create(createUserUserDto);
  }

  @Get(":id")
  async findAll(@Param("id") id: string) {
    return await this.userUserService.findAll(+id);
  }

  @Get(":investorId/:candidateId")
  async findByInvestorAndCandidate(
    @Param("investorId") investorId: string,
    @Param("candidateId") candidateId: string
  ) {
    return await this.userUserService.findByInvestorAndCandidate(
      +investorId,
      +candidateId
    );
  }

  @Delete()
  remove(
    @Body("userId") id: string,
    @Body("relatedUserId") relatedUserId: string
  ) {
    return this.userUserService.remove(+id, +relatedUserId);
  }
}
