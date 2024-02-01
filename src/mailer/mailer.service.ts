import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { MailerService } from "@nestjs-modules/mailer";

import { join } from "path";
import { UsersService } from "./../users/users.service";
import { User } from "./../users/entities/users.entity";

@Injectable()
export class MailService {
  constructor(
    private readonly mailerService: MailerService,
    @Inject(forwardRef(() => UsersService))
    private readonly userService: UsersService
  ) {}

  async sendUserConfirmation(user: User, token: string) {
    console.log("entro en el mailer service");
    console.log("node_env", process.env.NODE_ENV);
    const url =
      process.env.NODE_ENV === "prod"
        ? `https://ewol-backoffice.vercel.app/auth/confirm-email/${token}`
        : `http://localhost:3000/auth/confirm-email/${token}`;

    console.log("url to mailer", url);

    await this.mailerService.sendMail({
      from: '"No Reply" <hola@ewol.academy>',
      to: user.email,
      subject: `Hola ${user.full_name}, Confirma tu correo`,
      template: join(
        process.cwd(),
        "dist",
        "mailer",
        "templates",
        "confirmation.hbs"
      ),

      context: {
        name: user.full_name,
        url,
      },
      attachments: [
        {
          filename: "Screenshot%202022-11-07%20at%2015.29.13.png",
          path: "https://storage.googleapis.com/evaluados-files-1/Screenshot%202022-11-07%20at%2015.29.13.png",
        },
      ],
    });
  }

  async sendPasswordReset(user: User, token: string) {
    console.log("node_env", process.env.NODE_ENV);

    const url =
      process.env.NODE_ENV === "prod"
        ? `https://ewol-backoffice.vercel.app/auth/recovery-password/${token}`
        : `http://localhost:3000/auth/recovery-password/${token}`;

    await this.mailerService.sendMail({
      from: '"No Reply" <hola@ewol.academy>',
      to: user.email,
      subject: `Hola ${user.full_name}, Restablece tu contraseña`,
      template: join(
        process.cwd(),
        "dist",
        "mailer",
        "templates",
        "recoveryPassword.hbs"
      ),

      context: {
        name: user.full_name,
        url,
      },
      attachments: [
        {
          filename: "Screenshot%202022-11-07%20at%2015.29.13.png",
          path: "https://storage.googleapis.com/evaluados-files-1/Ewol%20Academy.png",
        },
      ],
    });
  }
}
