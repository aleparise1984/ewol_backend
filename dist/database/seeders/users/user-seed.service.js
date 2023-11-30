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
exports.UserSeedService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const roles_model_1 = require("../../../auth/models/roles.model");
const users_entity_1 = require("../../../users/entities/users.entity");
const users_service_1 = require("../../../users/users.service");
const typeorm_2 = require("typeorm");
const bcript = require("bcrypt");
let UserSeedService = class UserSeedService {
    constructor(userRepository, userService) {
        this.userRepository = userRepository;
        this.userService = userService;
    }
    async run() {
        const users = await this.userRepository.find();
        if (users.length === 0) {
            await this.userRepository.save([
                {
                    full_name: 'John Doe',
                    email: 'jonhDoe@mail.com',
                    password: await bcript.hash('1234567', 10),
                    phone: '123456789',
                    role: roles_model_1.Role.STUDENT_EWOL,
                },
            ]);
        }
        await this.userService.createStudent({
            full_name: 'Jane Doe',
            email: 'janeDoe@mail.com',
            password: await bcript.hash('1234567', 10),
            phone: '123456789',
            role: undefined,
            isConfirmed: false,
            student: {
                bootcamp_id: 1,
                user_id: undefined,
                test_result: undefined,
                test_url: undefined,
                typeform_result: undefined,
                typeform_url: undefined,
            },
        });
    }
};
UserSeedService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService])
], UserSeedService);
exports.UserSeedService = UserSeedService;
//# sourceMappingURL=user-seed.service.js.map