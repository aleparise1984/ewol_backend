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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModuleController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const student_module_service_1 = require("./student_module.service");
const student_module_dto_1 = require("./dto/student_module.dto");
let StudentModuleController = class StudentModuleController {
    constructor(studentModuleService) {
        this.studentModuleService = studentModuleService;
    }
    create(data) {
        return this.studentModuleService.create(data);
    }
    update(id, data) {
        return this.studentModuleService.update(+id, data);
    }
    async findOne(userId, moduleId) {
        console.log('controller_', userId, moduleId);
        return await this.studentModuleService.findOne(moduleId, userId);
    }
    async findAll() {
        return await this.studentModuleService.findAll();
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [student_module_dto_1.CreateStudentModuleDto]),
    __metadata("design:returntype", void 0)
], StudentModuleController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, student_module_dto_1.UpdateStudentModuleDto]),
    __metadata("design:returntype", void 0)
], StudentModuleController.prototype, "update", null);
__decorate([
    (0, common_1.Get)('/student/:userId/module/:moduleId'),
    openapi.ApiResponse({ status: 200, type: require("./entities/student_module.entity").StudentModule }),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('moduleId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], StudentModuleController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("./entities/student_module.entity").StudentModule] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StudentModuleController.prototype, "findAll", null);
StudentModuleController = __decorate([
    (0, common_1.Controller)('student-module'),
    __metadata("design:paramtypes", [student_module_service_1.StudentModuleService])
], StudentModuleController);
exports.StudentModuleController = StudentModuleController;
//# sourceMappingURL=student_module.controller.js.map