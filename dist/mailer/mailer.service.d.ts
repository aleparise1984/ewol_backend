import { MailerService } from '@nestjs-modules/mailer';
import { UsersService } from './../users/users.service';
import { User } from './../users/entities/users.entity';
export declare class MailService {
    private readonly mailerService;
    private readonly userService;
    constructor(mailerService: MailerService, userService: UsersService);
    sendUserConfirmation(user: User, token: string): Promise<void>;
    sendPasswordReset(user: User, token: string): Promise<void>;
}
