export declare class CreateStudentModuleDto {
    student_id: number;
    moodule_id: number;
    project_url: string;
    project_feedback: string;
    survey_response: string;
}
declare const UpdateStudentModuleDto_base: import("@nestjs/common").Type<Partial<CreateStudentModuleDto>>;
export declare class UpdateStudentModuleDto extends UpdateStudentModuleDto_base {
}
export {};
