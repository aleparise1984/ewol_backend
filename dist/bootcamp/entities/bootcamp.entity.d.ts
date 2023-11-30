import { Module } from 'src/module/entities/module.entity';
import { Student } from 'src/students/entities/student.entity';
export declare class Bootcamp {
    id: number;
    created_at: Date;
    updated_at: Date;
    code: string;
    name: string;
    discord_url: string;
    date_start: Date;
    date_end: Date;
    student: Student[];
    moodule: Module[];
}
