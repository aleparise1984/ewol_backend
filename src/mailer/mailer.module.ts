import { MailerModule } from "@nestjs-modules/mailer";
import { HandlebarsAdapter } from "@nestjs-modules/mailer/dist/adapters/handlebars.adapter";
import { Module, forwardRef } from "@nestjs/common";

import { join } from "path";
import { ConfigType } from "@nestjs/config";
import config from "../config";

import { UsersModule } from "./../users/users.module";
import { MailService } from "./mailer.service";

@Module({
  imports: [
    forwardRef(() => UsersModule),
    MailerModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        const { host, port, auth, secure } = configService.mailer;

        return {
          transport: {
            host: "smtp.gmail.com",
            secure: true,
            logger: true,
            auth: {
              user: process.env.MAILER_AUTH_USER,
              pass: process.env.MAILER_AUTH_PASSWORD,
            },
          },
          defaults: {
            from: '"No Reply" <hola@ewol.academy>',
          },
          template: {
            dir: join(__dirname, "..", "mailer", "templates"),
            adapter: new HandlebarsAdapter(),
            options: {
              strict: true,
            },
          },
        };
      },
    }),
  ],

  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
