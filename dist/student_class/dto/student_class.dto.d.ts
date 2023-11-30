export declare class CreateStudentClassDto {
    student_id: number;
    class_id: number;
    assistence: boolean;
}
declare const UpdateStudentClassDto_base: import("@nestjs/common").Type<Partial<CreateStudentClassDto>>;
export declare class UpdateStudentClassDto extends UpdateStudentClassDto_base {
}
export {};
