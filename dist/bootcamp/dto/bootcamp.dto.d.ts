export declare class CreateBootcampDto {
    code: string;
    name: string;
    discord_url: string;
    date_start: Date;
    date_end: Date;
}
declare const UpdateBootcampDto_base: import("@nestjs/common").Type<Partial<CreateBootcampDto>>;
export declare class UpdateBootcampDto extends UpdateBootcampDto_base {
}
export {};
