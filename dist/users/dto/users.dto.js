"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserDto = exports.CreateUserDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const roles_model_1 = require("./../../auth/models/roles.model");
const typeorm_1 = require("typeorm");
const student_entity_1 = require("./../../students/entities/student.entity");
const student_dto_1 = require("./../../students/dto/student.dto");
class CreateUserDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { full_name: { required: true, type: () => String }, email: { required: true, type: () => String }, password: { required: true, type: () => String, minLength: 4, maxLength: 20 }, publilcAddress: { required: false, type: () => String }, nonce: { required: false, type: () => Number }, phone: { required: true, type: () => String }, role: { required: true, enum: require("../../auth/models/roles.model").Role }, isConfirmed: { required: true, type: () => Boolean }, student: { required: true, type: () => require("../../students/dto/student.dto").CreateStudentDto } };
    }
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "full_name", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(4),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsLowercase)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "publilcAddress", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "nonce", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsLowercase)(),
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: roles_model_1.Role,
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "role", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], CreateUserDto.prototype, "isConfirmed", void 0);
__decorate([
    (0, class_validator_1.IsObject)(),
    (0, typeorm_1.Column)(() => student_entity_1.Student),
    __metadata("design:type", student_dto_1.CreateStudentDto)
], CreateUserDto.prototype, "student", void 0);
exports.CreateUserDto = CreateUserDto;
class UpdateUserDto extends (0, swagger_1.PartialType)(CreateUserDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateUserDto = UpdateUserDto;
//# sourceMappingURL=users.dto.js.map