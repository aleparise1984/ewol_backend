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
exports.StudentsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const students_service_1 = require("./students.service");
const student_dto_1 = require("./dto/student.dto");
let StudentsController = class StudentsController {
    constructor(studentsService) {
        this.studentsService = studentsService;
    }
    async getResponses(formId) {
        return await this.studentsService.typeformResponse(formId);
    }
    async findAll() {
        return await this.studentsService.findAll();
    }
    async findOne(id) {
        return await this.studentsService.findOne(+id);
    }
    update(id, updateStudentDto) {
        return this.studentsService.update(+id, updateStudentDto);
    }
};
__decorate([
    (0, common_1.Get)('/typeform/:formId'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('formId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "getResponses", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("./entities/student.entity").Student] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/student.entity").Student }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, student_dto_1.UpdateStudentDto]),
    __metadata("design:returntype", void 0)
], StudentsController.prototype, "update", null);
StudentsController = __decorate([
    (0, common_1.Controller)('students'),
    __metadata("design:paramtypes", [students_service_1.StudentsService])
], StudentsController);
exports.StudentsController = StudentsController;
//# sourceMappingURL=students.controller.js.map