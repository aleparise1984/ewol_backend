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
exports.StudentModuleService = void 0;
const common_1 = require("@nestjs/common");
const student_module_entity_1 = require("./entities/student_module.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let StudentModuleService = class StudentModuleService {
    constructor(studentModuleRepository) {
        this.studentModuleRepository = studentModuleRepository;
    }
    async create(data) {
        await this.studentModuleRepository.save(data);
    }
    async findOne(moduleId, userId) {
        console.log(moduleId, userId);
        return await this.studentModuleRepository.findOne({
            where: { student: { id: userId }, moodule: { id: moduleId } },
            relations: ['student', 'moodule'],
        });
    }
    async findAll() {
        return await this.studentModuleRepository.find({
            relations: ['student', 'moodule'],
        });
    }
    async update(id, data) {
        await this.studentModuleRepository.update(id, data);
    }
};
StudentModuleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(student_module_entity_1.StudentModule)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], StudentModuleService);
exports.StudentModuleService = StudentModuleService;
//# sourceMappingURL=student_module.service.js.map