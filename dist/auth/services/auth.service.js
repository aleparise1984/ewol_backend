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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("./../../users/users.service");
const mailer_service_1 = require("./../../mailer/mailer.service");
let AuthService = class AuthService {
    constructor(usersService, jwtService, mailService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.mailService = mailService;
    }
    async validateUser(email, password) {
        const user = await this.usersService.findOneByEmail(email);
        if (user) {
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
                const { password } = user, rta = __rest(user, ["password"]);
                return rta;
            }
        }
        return null;
    }
    generateJWT(user) {
        const payload = { role: user.role, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
            user,
        };
    }
    async register(user) {
        const { email } = user;
        const userExists = await this.usersService.findOneByEmail(email);
        if (userExists)
            throw new common_1.HttpException('User already exists', common_1.HttpStatus.BAD_REQUEST);
        const newUser = await this.usersService.createStudent(user);
        if (!newUser)
            throw new common_1.HttpException('User not created', common_1.HttpStatus.BAD_REQUEST);
        const userToken = await this.generateJWT(newUser);
        await this.mailService.sendUserConfirmation(newUser, userToken.access_token);
        return userToken;
    }
    async confirmEmail(token) {
        const payload = this.jwtService.verify(token);
        const user = await this.usersService.findOne(payload.sub);
        if (user) {
            user.isConfirmed = true;
            await this.usersService.update(user.id, user);
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'Email confirmed',
            };
        }
        return {
            statusCode: common_1.HttpStatus.NOT_FOUND,
            message: 'User not found',
        };
    }
    async forgotPassword(email) {
        const user = await this.usersService.findOneByEmail(email);
        if (!user) {
            return {
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'User not found',
            };
        }
        else {
            const token = this.generateJWT(user);
            await this.mailService.sendPasswordReset(user, token.access_token);
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'Email sent',
            };
        }
    }
    async resetPassword(token, password) {
        const pass = await bcrypt.hash(password, 10);
        const payload = this.jwtService.verify(token);
        const user = await this.usersService.findOne(payload.sub);
        if (user) {
            user.password = pass;
            console.log('user.pass', user.password);
            await this.usersService.update(user.id, user);
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'Password changed',
            };
        }
        return {
            statusCode: common_1.HttpStatus.NOT_FOUND,
            message: 'User not found',
        };
    }
    async validateToken(token) {
        try {
            const decoded = this.jwtService.verify(token);
            return decoded;
        }
        catch (err) {
            if (err.name === 'TokenExpiredError') {
                return {
                    statusCode: common_1.HttpStatus.UNAUTHORIZED,
                    message: 'Token expired',
                };
            }
            else {
                return {
                    statusCode: common_1.HttpStatus.UNAUTHORIZED,
                    message: 'Invalid token',
                };
            }
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService,
        mailer_service_1.MailService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map