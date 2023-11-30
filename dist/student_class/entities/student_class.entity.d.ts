import { Class } from 'src/class/entities/class.entity';
import { Student } from 'src/students/entities/student.entity';
export declare class StudentClass {
    id: number;
    created_at: Date;
    updated_at: Date;
    student: Student;
    class_: Class;
    assistence: boolean;
    like: boolean;
}
