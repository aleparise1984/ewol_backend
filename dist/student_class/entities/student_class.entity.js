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
exports.StudentClass = void 0;
const openapi = require("@nestjs/swagger");
const class_entity_1 = require("../../class/entities/class.entity");
const student_entity_1 = require("../../students/entities/student.entity");
const typeorm_1 = require("typeorm");
let StudentClass = class StudentClass {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, created_at: { required: true, type: () => Date }, updated_at: { required: true, type: () => Date }, student: { required: true, type: () => require("../../students/entities/student.entity").Student }, class_: { required: true, type: () => require("../../class/entities/class.entity").Class }, assistence: { required: true, type: () => Boolean }, like: { required: true, type: () => Boolean } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], StudentClass.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], StudentClass.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], StudentClass.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => student_entity_1.Student, (student) => student.student_class),
    __metadata("design:type", student_entity_1.Student)
], StudentClass.prototype, "student", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => class_entity_1.Class, (class_) => class_.student_class),
    __metadata("design:type", class_entity_1.Class)
], StudentClass.prototype, "class_", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'boolean',
        default: false,
    }),
    __metadata("design:type", Boolean)
], StudentClass.prototype, "assistence", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'boolean',
        default: false,
    }),
    __metadata("design:type", Boolean)
], StudentClass.prototype, "like", void 0);
StudentClass = __decorate([
    (0, typeorm_1.Entity)()
], StudentClass);
exports.StudentClass = StudentClass;
//# sourceMappingURL=student_class.entity.js.map