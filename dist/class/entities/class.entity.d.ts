import { Module } from 'src/module/entities/module.entity';
import { StudentClass } from 'src/student_class/entities/student_class.entity';
export declare enum TypeClass {
    teoric = "teoric",
    practical = "practical"
}
export declare class Class {
    id: number;
    created_at: Date;
    updated_at: Date;
    name: string;
    description: string;
    video_url: string;
    pdf_url: string;
    date_start: Date;
    moodule: Module;
    student_class: StudentClass[];
}
