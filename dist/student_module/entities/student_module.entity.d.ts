import { Module } from 'src/module/entities/module.entity';
import { Student } from 'src/students/entities/student.entity';
export declare enum Status {
    PENDING = "PENDING",
    APPROVED = "APPROVED",
    REPROBATE = "REPROBATE"
}
export declare class StudentModule {
    id: number;
    created_at: Date;
    updated_at: Date;
    student: Student;
    moodule: Module;
    project_url: string;
    project_feedback: string;
    status: Status;
    survey_response: string;
}
