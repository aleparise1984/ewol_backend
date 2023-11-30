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
exports.Class = exports.TypeClass = void 0;
const openapi = require("@nestjs/swagger");
const module_entity_1 = require("../../module/entities/module.entity");
const student_class_entity_1 = require("../../student_class/entities/student_class.entity");
const typeorm_1 = require("typeorm");
var TypeClass;
(function (TypeClass) {
    TypeClass["teoric"] = "teoric";
    TypeClass["practical"] = "practical";
})(TypeClass = exports.TypeClass || (exports.TypeClass = {}));
let Class = class Class {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, created_at: { required: true, type: () => Date }, updated_at: { required: true, type: () => Date }, name: { required: true, type: () => String }, description: { required: true, type: () => String }, video_url: { required: true, type: () => String }, pdf_url: { required: true, type: () => String }, date_start: { required: true, type: () => Date }, moodule: { required: true, type: () => require("../../module/entities/module.entity").Module }, student_class: { required: true, type: () => [require("../../student_class/entities/student_class.entity").StudentClass] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Class.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Class.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Class.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Class.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Class.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Class.prototype, "video_url", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Class.prototype, "pdf_url", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Class.prototype, "date_start", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => module_entity_1.Module, (moodule) => moodule.class),
    __metadata("design:type", module_entity_1.Module)
], Class.prototype, "moodule", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => student_class_entity_1.StudentClass, (student_class) => student_class.class_),
    __metadata("design:type", Array)
], Class.prototype, "student_class", void 0);
Class = __decorate([
    (0, typeorm_1.Entity)()
], Class);
exports.Class = Class;
//# sourceMappingURL=class.entity.js.map