import { AuthService } from './../services/auth.service';
import { Strategy } from 'passport-local';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(email: string, password: string): Promise<{
        id: number;
        created_at: Date;
        updated_at: Date;
        full_name: string;
        email: string;
        phone: string;
        role: import("../models/roles.model").Role;
        isConfirmed: boolean;
        students: import("../../students/entities/student.entity").Student;
    }>;
}
export {};
