import { Role } from './../../auth/models/roles.model';
import { Student } from './../../students/entities/student.entity';
export declare class User {
    id: number;
    created_at: Date;
    updated_at: Date;
    full_name: string;
    email: string;
    password: string;
    phone: string;
    role: Role;
    isConfirmed: boolean;
    students: Student;
}
