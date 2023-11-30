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
exports.StudentModule = exports.Status = void 0;
const openapi = require("@nestjs/swagger");
const module_entity_1 = require("../../module/entities/module.entity");
const student_entity_1 = require("../../students/entities/student.entity");
const typeorm_1 = require("typeorm");
var Status;
(function (Status) {
    Status["PENDING"] = "PENDING";
    Status["APPROVED"] = "APPROVED";
    Status["REPROBATE"] = "REPROBATE";
})(Status = exports.Status || (exports.Status = {}));
let StudentModule = class StudentModule {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, created_at: { required: true, type: () => Date }, updated_at: { required: true, type: () => Date }, student: { required: true, type: () => require("../../students/entities/student.entity").Student }, moodule: { required: true, type: () => require("../../module/entities/module.entity").Module }, project_url: { required: true, type: () => String }, project_feedback: { required: true, type: () => String }, status: { required: true, enum: require("./student_module.entity").Status }, survey_response: { required: true, type: () => String } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], StudentModule.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], StudentModule.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], StudentModule.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => student_entity_1.Student, (student) => student.student_modules),
    __metadata("design:type", student_entity_1.Student)
], StudentModule.prototype, "student", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => module_entity_1.Module, (moodule) => moodule.student_modules),
    __metadata("design:type", module_entity_1.Module)
], StudentModule.prototype, "moodule", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], StudentModule.prototype, "project_url", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], StudentModule.prototype, "project_feedback", void 0);
__decorate([
    (0, typeorm_1.Column)('enum', {
        enum: Status,
        default: Status.PENDING,
    }),
    __metadata("design:type", String)
], StudentModule.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], StudentModule.prototype, "survey_response", void 0);
StudentModule = __decorate([
    (0, typeorm_1.Entity)()
], StudentModule);
exports.StudentModule = StudentModule;
//# sourceMappingURL=student_module.entity.js.map