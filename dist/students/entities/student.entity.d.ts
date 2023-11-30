import { User } from './../../users/entities/users.entity';
import { Bootcamp } from 'src/bootcamp/entities/bootcamp.entity';
import { StudentModule } from 'src/student_module/entities/student_module.entity';
import { StudentClass } from 'src/student_class/entities/student_class.entity';
export declare class Student {
    id: number;
    test_url: string;
    test_result: boolean;
    typeform_url: string;
    typeform_result: boolean;
    feedback: string;
    user: User;
    bootcamp: Bootcamp;
    student_modules: StudentModule[];
    student_class: StudentClass[];
}
