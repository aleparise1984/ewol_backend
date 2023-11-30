export declare class CreateClassDto {
    name: string;
    description: string;
    video_url: string;
    pdf_url: string;
    date_start: Date;
    module_id: number;
}
declare const UpdateClassDto_base: import("@nestjs/common").Type<Partial<CreateClassDto>>;
export declare class UpdateClassDto extends UpdateClassDto_base {
}
export {};
