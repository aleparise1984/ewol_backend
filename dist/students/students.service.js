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
exports.StudentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const student_entity_1 = require("./entities/student.entity");
const roles_model_1 = require("../auth/models/roles.model");
const axios_1 = require("axios");
let StudentsService = class StudentsService {
    constructor(studentRepository) {
        this.studentRepository = studentRepository;
    }
    findAll() {
        return this.studentRepository.find({
            relations: ['user'],
            where: {
                user: {
                    role: roles_model_1.Role.CANDIDATE_EWOL,
                },
                test_result: (0, typeorm_2.Not)((0, typeorm_2.IsNull)()),
            },
        });
    }
    async findOne(id) {
        const student = await this.studentRepository.findOne({
            relations: ['user'],
            where: { user: { id } },
        });
        return student;
    }
    async update(id, payload) {
        const student = await this.studentRepository.findOne({
            relations: ['user'],
            where: {
                id,
            },
        });
        if (!student) {
            return console.log('Student not found');
        }
        else {
            const updateStudent = await this.studentRepository.merge(student, payload);
            return await this.studentRepository.save(updateStudent);
        }
    }
    async typeformResponse(userForm) {
        const formId = 'Gh5zui2c';
        const apiKey = 'tfp_9FoKaNNcpwy23SRUQfReBbowf3dytAEBZbUZt9ZEj9g5_3paaWAofoL9Yms';
        const apiUrl = `https://api.typeform.com/forms/${formId}/responses?pageSize=1000`;
        try {
            const response = await axios_1.default.get(apiUrl, {
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                },
            });
            const filteredResponse = response.data.items.find((item) => item.response_id === userForm);
            if (filteredResponse) {
                return filteredResponse;
            }
            else {
                throw new Error('No se encontró ningún elemento con el response_id proporcionado.');
            }
        }
        catch (error) {
            console.error('Error al obtener las respuestas: ', error);
            throw new Error('No se pudieron obtener las respuestas');
        }
    }
};
StudentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(student_entity_1.Student)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], StudentsService);
exports.StudentsService = StudentsService;
//# sourceMappingURL=students.service.js.map