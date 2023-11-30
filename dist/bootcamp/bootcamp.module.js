"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BootcampModule = void 0;
const common_1 = require("@nestjs/common");
const bootcamp_service_1 = require("./bootcamp.service");
const bootcamp_controller_1 = require("./bootcamp.controller");
const typeorm_1 = require("@nestjs/typeorm");
const student_entity_1 = require("../students/entities/student.entity");
const bootcamp_entity_1 = require("./entities/bootcamp.entity");
let BootcampModule = class BootcampModule {
};
BootcampModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([bootcamp_entity_1.Bootcamp, student_entity_1.Student])],
        controllers: [bootcamp_controller_1.BootcampController],
        providers: [bootcamp_service_1.BootcampService],
    })
], BootcampModule);
exports.BootcampModule = BootcampModule;
//# sourceMappingURL=bootcamp.module.js.map