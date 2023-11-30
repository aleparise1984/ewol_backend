"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const dotenv_1 = require("dotenv");
const config_1 = require("@nestjs/config");
(0, dotenv_1.config)();
const configService = new config_1.ConfigService();
exports.default = new typeorm_1.DataSource({
    type: 'postgres',
    username: configService.get('POSTGRES_USER'),
    password: configService.get('POSTGRES_PASSWORD'),
    database: configService.get('POSTGRES_DB'),
    port: configService.get('POSTGRES_PORT'),
    host: configService.get('POSTGRES_HOST'),
    synchronize: false,
    logging: true,
    entities: ['dist/**/**/*.entity.js'],
    migrations: ['dist/database/migrations/*.js'],
});
//# sourceMappingURL=dataSource.js.map