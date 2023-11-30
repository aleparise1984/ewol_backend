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
exports.Bootcamp = void 0;
const openapi = require("@nestjs/swagger");
const module_entity_1 = require("../../module/entities/module.entity");
const student_entity_1 = require("../../students/entities/student.entity");
const typeorm_1 = require("typeorm");
let Bootcamp = class Bootcamp {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, created_at: { required: true, type: () => Date }, updated_at: { required: true, type: () => Date }, code: { required: true, type: () => String }, name: { required: true, type: () => String }, discord_url: { required: true, type: () => String }, date_start: { required: true, type: () => Date }, date_end: { required: true, type: () => Date }, student: { required: true, type: () => [require("../../students/entities/student.entity").Student] }, moodule: { required: true, type: () => [require("../../module/entities/module.entity").Module] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Bootcamp.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Bootcamp.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Bootcamp.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)({
        unique: true,
    }),
    __metadata("design:type", String)
], Bootcamp.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Bootcamp.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Bootcamp.prototype, "discord_url", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Bootcamp.prototype, "date_start", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Bootcamp.prototype, "date_end", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => student_entity_1.Student, (student) => student.bootcamp),
    __metadata("design:type", Array)
], Bootcamp.prototype, "student", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => module_entity_1.Module, (moodule) => moodule.bootcamp),
    __metadata("design:type", Array)
], Bootcamp.prototype, "moodule", void 0);
Bootcamp = __decorate([
    (0, typeorm_1.Entity)()
], Bootcamp);
exports.Bootcamp = Bootcamp;
//# sourceMappingURL=bootcamp.entity.js.map