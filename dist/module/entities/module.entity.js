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
exports.Module = void 0;
const openapi = require("@nestjs/swagger");
const bootcamp_entity_1 = require("../../bootcamp/entities/bootcamp.entity");
const class_entity_1 = require("../../class/entities/class.entity");
const student_module_entity_1 = require("../../student_module/entities/student_module.entity");
const typeorm_1 = require("typeorm");
const module_items_entity_1 = require("./module_items.entity");
let Module = class Module {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, created_at: { required: true, type: () => Date }, updated_at: { required: true, type: () => Date }, name: { required: true, type: () => String }, date_start: { required: true, type: () => Date }, survey_url: { required: true, type: () => String }, project_title: { required: true, type: () => String }, project_description: { required: true, type: () => String }, project_date_start: { required: true, type: () => Date }, project_date_end: { required: true, type: () => Date }, bootcamp: { required: true, type: () => require("../../bootcamp/entities/bootcamp.entity").Bootcamp }, class: { required: true, type: () => [require("../../class/entities/class.entity").Class] }, module_items: { required: true, type: () => [require("./module_items.entity").ModuleItem] }, student_modules: { required: true, type: () => [require("../../student_module/entities/student_module.entity").StudentModule] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Module.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Module.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Module.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Module.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Module.prototype, "date_start", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Module.prototype, "survey_url", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], Module.prototype, "project_title", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], Module.prototype, "project_description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", Date)
], Module.prototype, "project_date_start", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", Date)
], Module.prototype, "project_date_end", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => bootcamp_entity_1.Bootcamp, (bootcamp) => bootcamp.moodule),
    __metadata("design:type", bootcamp_entity_1.Bootcamp)
], Module.prototype, "bootcamp", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => class_entity_1.Class, (classs) => classs.moodule),
    __metadata("design:type", Array)
], Module.prototype, "class", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => module_items_entity_1.ModuleItem, (module_item) => module_item.moodule),
    __metadata("design:type", Array)
], Module.prototype, "module_items", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => student_module_entity_1.StudentModule, (student_module) => student_module.moodule),
    __metadata("design:type", Array)
], Module.prototype, "student_modules", void 0);
Module = __decorate([
    (0, typeorm_1.Entity)()
], Module);
exports.Module = Module;
//# sourceMappingURL=module.entity.js.map