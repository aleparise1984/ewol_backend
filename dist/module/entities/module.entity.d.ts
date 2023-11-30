import { Bootcamp } from 'src/bootcamp/entities/bootcamp.entity';
import { Class } from 'src/class/entities/class.entity';
import { StudentModule } from 'src/student_module/entities/student_module.entity';
import { ModuleItem } from './module_items.entity';
export declare class Module {
    id: number;
    created_at: Date;
    updated_at: Date;
    name: string;
    date_start: Date;
    survey_url: string;
    project_title: string;
    project_description: string;
    project_date_start: Date;
    project_date_end: Date;
    bootcamp: Bootcamp;
    class: Class[];
    module_items: ModuleItem[];
    student_modules: StudentModule[];
}
