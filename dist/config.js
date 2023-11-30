"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('config', () => {
    return {
        postgres: {
            dbName: process.env.POSTGRES_DB,
            port: parseInt(process.env.POSTGRES_PORT, 10),
            password: process.env.POSTGRES_PASSWORD,
            user: process.env.POSTGRES_USER,
            host: process.env.POSTGRES_HOST,
        },
        apiKey: process.env.API_KEY,
        jwtSecret: process.env.JWT_SECRET,
        mailer: {
            host: process.env.MAILER_HOST,
            port: parseInt(process.env.MAILER_PORT),
            secure: process.env.MAILER_SECURE,
            auth: {
                user: process.env.MAILER_AUTH_USER,
                pass: process.env.MAILER_AUTH_PASSWORD,
            },
        },
    };
});
//# sourceMappingURL=config.js.map