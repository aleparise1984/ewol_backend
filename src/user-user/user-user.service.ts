import { Injectable } from "@nestjs/common";
import { CreateUserUserDto } from "./dto/user-user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { UserUser } from "./entities/user-user.entity";
import { Repository } from "typeorm";
import { MailService } from "src/mailer/mailer.service";

@Injectable()
export class UserUserService {
  constructor(
    @InjectRepository(UserUser)
    private readonly userUserRepository: Repository<UserUser>,
    private mailService: MailService
  ) {}
  async create(payload: CreateUserUserDto) {
    const userUser = await this.userUserRepository.findOne({
      relations: ["relatedUser", "user"],
      where: {
        user: { id: payload.user.id },
        relatedUser: { id: payload.relatedUser.id },
      },
    });

    if (userUser) {
      throw new Error("User already exists");
    }

    await this.userUserRepository.save(payload);
    await this.mailService.SendInversorInvertIntoCandidate();

    return "UserUser created successfully";
  }

  async findAll(id: number) {
    return await this.userUserRepository.find({
      relations: ["relatedUser", "user"],
      where: { user: { id } },
    });
  }

  async findByInvestorAndCandidate(
    investorId: number,
    candidateId: number
  ): Promise<UserUser> {
    return await this.userUserRepository.findOne({
      relations: ["relatedUser", "user"],
      where: { user: { id: investorId }, relatedUser: { id: candidateId } },
    });
  }

  async remove(userId: number, relatedUserId: number) {
    await this.userUserRepository.findOne({
      relations: ["relatedUser", "user"],
      where: { user: { id: userId }, relatedUser: { id: relatedUserId } },
    });
  }
}
