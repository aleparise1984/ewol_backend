"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const Joi = require("@hapi/joi");
const enviroments_1 = require("./enviroments");
const config_2 = require("./config");
const app_service_1 = require("./app.service");
const app_controller_1 = require("./app.controller");
const database_module_1 = require("./database/database.module");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const mailer_module_1 = require("./mailer/mailer.module");
const students_module_1 = require("./students/students.module");
const bootcamp_module_1 = require("./bootcamp/bootcamp.module");
const module_module_1 = require("./module/module.module");
const class_module_1 = require("./class/class.module");
const student_class_module_1 = require("./student_class/student_class.module");
const student_module_module_1 = require("./student_module/student_module.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: enviroments_1.enviroments[process.env.NODE_ENV] || '.env',
                load: [config_2.default],
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
            database_module_1.DatabaseModule,
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            mailer_module_1.MailModule,
            students_module_1.StudentsModule,
            bootcamp_module_1.BootcampModule,
            module_module_1.ModuleModule,
            class_module_1.ClassModule,
            student_class_module_1.StudentClassModule,
            student_module_module_1.StudentModuleModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map