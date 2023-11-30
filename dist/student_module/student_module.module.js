"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModuleModule = void 0;
const common_1 = require("@nestjs/common");
const student_module_service_1 = require("./student_module.service");
const student_module_controller_1 = require("./student_module.controller");
const typeorm_1 = require("@nestjs/typeorm");
const student_module_entity_1 = require("./entities/student_module.entity");
const module_entity_1 = require("./../module/entities/module.entity");
const student_entity_1 = require("../students/entities/student.entity");
let StudentModuleModule = class StudentModuleModule {
};
StudentModuleModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([student_module_entity_1.StudentModule, student_entity_1.Student, module_entity_1.Module])],
        controllers: [student_module_controller_1.StudentModuleController],
        providers: [student_module_service_1.StudentModuleService],
    })
], StudentModuleModule);
exports.StudentModuleModule = StudentModuleModule;
//# sourceMappingURL=student_module.module.js.map