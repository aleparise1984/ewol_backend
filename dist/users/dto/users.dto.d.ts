import { Role } from './../../auth/models/roles.model';
import { CreateStudentDto } from './../../students/dto/student.dto';
export declare class CreateUserDto {
    full_name: string;
    email: string;
    password: string;
    publilcAddress?: string;
    nonce?: number;
    phone: string;
    role: Role;
    isConfirmed: boolean;
    student: CreateStudentDto;
}
declare const UpdateUserDto_base: import("@nestjs/common").Type<Partial<CreateUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
}
export {};
