"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
const common_1 = require("@nestjs/common");
const mailer_1 = require("@nestjs-modules/mailer");
const path_1 = require("path");
const users_service_1 = require("./../users/users.service");
let MailService = class MailService {
    constructor(mailerService, userService) {
        this.mailerService = mailerService;
        this.userService = userService;
    }
    async sendUserConfirmation(user, token) {
        const userData = await this.userService.findOne(user.id);
        const url = process.env.NODE_ENV === 'prod'
            ? `https://ewol-academy.com/auth/confirm-email?token=${token}`
            : `http://localhost:3001/auth/confirm-email?token=${token}`;
        await this.mailerService.sendMail({
            from: '"No Reply" <no-reply@e-valuados.com>',
            to: user.email,
            subject: `Hola ${user.full_name}, Confirma tu correo`,
            template: (0, path_1.join)(process.cwd(), 'dist', 'mailer', 'templates', 'confirmation.hbs'),
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
    async sendPasswordReset(user, token) {
        const userData = await this.userService.findOne(user.id);
        const url = process.env.NODE_ENV === 'test'
            ? `http://localhost:3011/auth/reset-password?token=${token}`
            : `https://ewol-academy.com/auth/reset-password?token=${token}`;
        await this.mailerService.sendMail({
            from: '"No Reply" <no-reply@e-valuados.com>',
            to: user.email,
            subject: `Hola ${user.full_name}, Restablece tu contraseña`,
            template: (0, path_1.join)(process.cwd(), 'dist', 'mailer', 'templates', 'recoveryPassword.hbs'),
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
};
MailService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => users_service_1.UsersService))),
    __metadata("design:paramtypes", [mailer_1.MailerService,
        users_service_1.UsersService])
], MailService);
exports.MailService = MailService;
//# sourceMappingURL=mailer.service.js.map