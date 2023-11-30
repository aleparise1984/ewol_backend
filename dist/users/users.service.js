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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const users_entity_1 = require("./entities/users.entity");
const bcript = require("bcrypt");
const roles_model_1 = require("./../auth/models/roles.model");
const student_entity_1 = require("./../students/entities/student.entity");
let UsersService = class UsersService {
    constructor(userRepository, dataSource) {
        this.userRepository = userRepository;
        this.dataSource = dataSource;
    }
    async create(payload) {
        const newUser = this.userRepository.create(payload);
        const hashPassword = await bcript.hash(newUser.password, 10);
        newUser.password = hashPassword;
        await this.userRepository.save(newUser);
        return newUser;
    }
    async createStudent(payload) {
        const data = {
            students: {
                bootcamp_id: 1,
            },
            user: Object.assign(Object.assign({}, payload), { phone: '', password: await bcript.hash(payload.password, 10), role: roles_model_1.Role.CANDIDATE_EWOL }),
        };
        const queryRunner = await this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const user = await queryRunner.manager.getRepository(users_entity_1.User).findOne({
                where: { email: payload.email },
            });
            if (user) {
                throw new common_1.HttpException('User already exists', 400);
            }
            const newUser = await queryRunner.manager
                .getRepository(users_entity_1.User)
                .save(data.user);
            if (!newUser) {
                throw new common_1.HttpException('User not created', 400);
            }
            const newStudent = await queryRunner.manager
                .getRepository(student_entity_1.Student)
                .save(Object.assign(Object.assign({}, data.students), { user: newUser }));
            if (!newStudent) {
                throw new common_1.HttpException('Student not created', 400);
            }
            await queryRunner.commitTransaction();
            return await this.findOne(newUser.id);
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
            throw new common_1.HttpException(error.message, 400);
        }
        finally {
            await queryRunner.release();
        }
    }
    findAll() {
        const users = this.userRepository.find();
        return users;
    }
    async findOneByEmail(email) {
        const user = await this.userRepository.findOne({
            where: { email },
        });
        return user;
    }
    async findCandidate() {
        return await this.userRepository.find({
            where: { role: roles_model_1.Role.CANDIDATE_EWOL },
        });
    }
    async findOne(id) {
        const user = await this.userRepository.findOne({
            where: { id },
        });
        return user;
    }
    async update(id, updateUserDto) {
        const user = await this.userRepository.findOne({
            where: { id },
        });
        if (updateUserDto.password) {
            const hashPassword = await bcript.hash(updateUserDto.password, 10);
            updateUserDto.password = hashPassword;
        }
        this.userRepository.merge(user, updateUserDto);
        const updatedUser = await this.userRepository.save(user);
        return updatedUser;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.DataSource])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map