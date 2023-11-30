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
exports.Student = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const users_entity_1 = require("./../../users/entities/users.entity");
const bootcamp_entity_1 = require("../../bootcamp/entities/bootcamp.entity");
const student_module_entity_1 = require("../../student_module/entities/student_module.entity");
const student_class_entity_1 = require("../../student_class/entities/student_class.entity");
let Student = class Student {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, test_url: { required: true, type: () => String }, test_result: { required: true, type: () => Boolean }, typeform_url: { required: true, type: () => String }, typeform_result: { required: true, type: () => Boolean }, feedback: { required: true, type: () => String }, user: { required: true, type: () => require("../../users/entities/users.entity").User }, bootcamp: { required: true, type: () => require("../../bootcamp/entities/bootcamp.entity").Bootcamp }, student_modules: { required: true, type: () => [require("../../student_module/entities/student_module.entity").StudentModule] }, student_class: { required: true, type: () => [require("../../student_class/entities/student_class.entity").StudentClass] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Student.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: true,
    }),
    __metadata("design:type", String)
], Student.prototype, "test_url", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", Boolean)
], Student.prototype, "test_result", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: true,
    }),
    __metadata("design:type", String)
], Student.prototype, "typeform_url", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], Student.prototype, "typeform_result", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: true,
    }),
    __metadata("design:type", String)
], Student.prototype, "feedback", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.User, (user) => user.students),
    __metadata("design:type", users_entity_1.User)
], Student.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => bootcamp_entity_1.Bootcamp, (bootcamp) => bootcamp.student),
    __metadata("design:type", bootcamp_entity_1.Bootcamp)
], Student.prototype, "bootcamp", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => student_module_entity_1.StudentModule, (student_module) => student_module.student),
    __metadata("design:type", Array)
], Student.prototype, "student_modules", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => student_class_entity_1.StudentClass, (student_class) => student_class.student),
    __metadata("design:type", Array)
], Student.prototype, "student_class", void 0);
Student = __decorate([
    (0, typeorm_1.Entity)()
], Student);
exports.Student = Student;
//# sourceMappingURL=student.entity.js.map