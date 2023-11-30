import { Request } from 'express';
import { AuthService } from './../services/auth.service';
import { User } from './../../users/entities/users.entity';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: Request): {
        access_token: string;
        user: User;
    };
    register(req: Request): Promise<{
        access_token: string;
        user: User;
    }>;
    confirmEmail(req: Request): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    forgotPassword(req: Request): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    resetPassword(req: Request): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    validateToken(req: Request): Promise<any>;
}
