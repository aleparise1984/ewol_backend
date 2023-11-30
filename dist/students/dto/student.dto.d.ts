export declare class CreateStudentDto {
    test_url: string;
    test_result: boolean;
    typeform_url: string;
    typeform_result: boolean;
    bootcamp_id: number;
    user_id: number;
}
declare const UpdateStudentDto_base: import("@nestjs/common").Type<Partial<CreateStudentDto>>;
export declare class UpdateStudentDto extends UpdateStudentDto_base {
}
export {};
