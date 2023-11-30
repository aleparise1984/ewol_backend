"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const config_2 = require("../../config");
const enviroments_1 = require("../../enviroments");
const Joi = require("@hapi/joi");
const user_seed_module_1 = require("./users/user-seed.module");
let SeedModule = class SeedModule {
};
SeedModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: enviroments_1.enviroments[process.env.NODE_ENV] || '.env',
                load: [config_2.default],
                isGlobal: true,
                validationSchema: Joi.object({
                    POSTGRES_DB: Joi.string().required(),
                    POSTGRES_USER: Joi.string().required(),
                    POSTGRES_PASSWORD: Joi.string().required(),
                    POSTGRES_PORT: Joi.number().required(),
                    POSTGRES_HOST: Joi.string().required(),
                    JWT_SECRET: Joi.string().required(),
                }),
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_2.default.KEY],
                useFactory: (configService) => {
                    const { user, host, dbName, password, port } = configService.postgres;
                    return {
                        type: 'postgres',
                        host,
                        port,
                        username: user,
                        password,
                        database: dbName,
                        synchronize: false,
                        autoLoadEntities: true,
                        entities: ['dist/**/**/*.entity.js'],
                        migrations: ['dist/**/**/*.migrations.js'],
                    };
                },
            }),
            user_seed_module_1.UserSeedModule,
        ],
    })
], SeedModule);
exports.SeedModule = SeedModule;
//# sourceMappingURL=seeder.module.js.map