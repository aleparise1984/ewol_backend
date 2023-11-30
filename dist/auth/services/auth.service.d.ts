import { HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from './../../users/users.service';
import { User } from './../../users/entities/users.entity';
import { MailService } from './../../mailer/mailer.service';
import { CreateUserDto } from './../../users/dto/users.dto';
import { Role } from '../models/roles.model';
export declare class AuthService {
    private usersService;
    private jwtService;
    private mailService;
    constructor(usersService: UsersService, jwtService: JwtService, mailService: MailService);
    validateUser(email: string, password: string): Promise<{
        id: number;
        created_at: Date;
        updated_at: Date;
        full_name: string;
        email: string;
        phone: string;
        role: Role;
        isConfirmed: boolean;
        students: import("../../students/entities/student.entity").Student;
    }>;
    generateJWT(user: User): {
        access_token: string;
        user: User;
    };
    register(user: CreateUserDto): Promise<{
        access_token: string;
        user: User;
    }>;
    confirmEmail(token: string): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    forgotPassword(email: string): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    resetPassword(token: string, password: string): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    validateToken(token: string): Promise<any>;
}
