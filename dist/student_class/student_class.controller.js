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
exports.StudentClassController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const student_class_service_1 = require("./student_class.service");
const student_class_dto_1 = require("./dto/student_class.dto");
let StudentClassController = class StudentClassController {
    constructor(studentClassService) {
        this.studentClassService = studentClassService;
    }
    create(data) {
        return this.studentClassService.create(data);
    }
    findAll() {
        return this.studentClassService.findAll();
    }
    findOne(id) {
        return this.studentClassService.findOne(+id);
    }
    update(id, data) {
        return this.studentClassService.update(+id, data);
    }
    remove(id) {
        return this.studentClassService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: String }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [student_class_dto_1.CreateStudentClassDto]),
    __metadata("design:returntype", void 0)
], StudentClassController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: String }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StudentClassController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StudentClassController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, student_class_dto_1.UpdateStudentClassDto]),
    __metadata("design:returntype", void 0)
], StudentClassController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StudentClassController.prototype, "remove", null);
StudentClassController = __decorate([
    (0, common_1.Controller)('student-class'),
    __metadata("design:paramtypes", [student_class_service_1.StudentClassService])
], StudentClassController);
exports.StudentClassController = StudentClassController;
//# sourceMappingURL=student_class.controller.js.map