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
exports.ModuleItem = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const module_entity_1 = require("./module.entity");
let ModuleItem = class ModuleItem {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, created_at: { required: true, type: () => Date }, updated_at: { required: true, type: () => Date }, name: { required: true, type: () => String }, moodule: { required: true, type: () => require("./module.entity").Module } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ModuleItem.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ModuleItem.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ModuleItem.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ModuleItem.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => module_entity_1.Module, (moodule) => moodule.module_items),
    __metadata("design:type", module_entity_1.Module)
], ModuleItem.prototype, "moodule", void 0);
ModuleItem = __decorate([
    (0, typeorm_1.Entity)()
], ModuleItem);
exports.ModuleItem = ModuleItem;
//# sourceMappingURL=module_items.entity.js.map