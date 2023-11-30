import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

import { join } from 'path';
import { UsersService } from './../users/users.service';
import { User } from './../users/entities/users.entity';

@Injectable()
export class MailService {
  constructor(
    private readonly mailerService: MailerService,
    @Inject(forwardRef(() => UsersService))
    private readonly userService: UsersService,
  ) {}

  async sendUserConfirmation(user: User, token: string) {
    const userData = await this.userService.findOne(user.id);

    const url =
      process.env.NODE_ENV === 'prod'
        ? `https://ewol-academy.com/auth/confirm-email?token=${token}`
        : `http://localhost:3001/auth/confirm-email?token=${token}`;

    await this.mailerService.sendMail({
      from: '"No Reply" <no-reply@e-valuados.com>',
      to: user.email,
      subject: `Hola ${user.full_name}, Confirma tu correo`,
      template: join(
        process.cwd(),
        'dist',
        'mailer',
        'templates',
        'confirmation.hbs',
      ),

      context: {
        name: user.full_name,
        url,
      },
      attachments: [
        {
          filename: 'Screenshot%202022-11-07%20at%2015.29.13.png',
          path: 'https://storage.googleapis.com/evaluados-files-1/Screenshot%202022-11-07%20at%2015.29.13.png',
        },
      ],
    });
  }

  async sendPasswordReset(user: User, token: string) {
    const userData = await this.userService.findOne(user.id);

    const url =
      process.env.NODE_ENV === 'test'
        ? `http://localhost:3011/auth/reset-password?token=${token}`
        : `https://ewol-academy.com/auth/reset-password?token=${token}`;

    await this.mailerService.sendMail({
      from: '"No Reply" <no-reply@e-valuados.com>',
      to: user.email,
      subject: `Hola ${user.full_name}, Restablece tu contraseña`,
      template: join(
        process.cwd(),
        'dist',
        'mailer',
        'templates',
        'recoveryPassword.hbs',
      ),

      context: {
        name: user.full_name,
        url,
      },
      attachments: [
        {
          filename: 'Screenshot%202022-11-07%20at%2015.29.13.png',
          path: 'https://storage.googleapis.com/evaluados-files-1/Ewol%20Academy.png',
        },
      ],
    });
  }
}
