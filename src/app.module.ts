import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';

import { enviroments } from './enviroments';
import config from './config';
import { AppService } from './app.service';
import { AppController } from './app.controller';

import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';

import { AuthModule } from './auth/auth.module';
import { MailModule } from './mailer/mailer.module';
import { StudentsModule } from './students/students.module';
import { BootcampModule } from './bootcamp/bootcamp.module';
import { ModuleModule } from './module/module.module';
import { ClassModule } from './class/class.module';
import { StudentClassModule } from './student_class/student_class.module';
import { StudentModuleModule } from './student_module/student_module.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        POSTGRES_DB: Joi.string().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_HOST: Joi.string().required(),
        JWT_SECRET: Joi.string().required(),
      }),
    }),
    DatabaseModule,
    UsersModule,
    AuthModule,
    MailModule,
    StudentsModule,
    BootcampModule,
    ModuleModule,
    ClassModule,
    StudentClassModule,
    StudentModuleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
