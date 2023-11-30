export declare class CreateModuleDto {
    name: string;
    code: string;
    survey_url: string;
    date_start: Date;
    date_end: Date;
    bootcamp_id: number;
}
declare const UpdateModuleDto_base: import("@nestjs/common").Type<Partial<CreateModuleDto>>;
export declare class UpdateModuleDto extends UpdateModuleDto_base {
}
export {};
