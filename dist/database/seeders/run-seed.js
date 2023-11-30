"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const seeder_module_1 = require("./seeder.module");
const user_seed_service_1 = require("./users/user-seed.service");
const runSeed = async () => {
    const app = await core_1.NestFactory.create(seeder_module_1.SeedModule);
    const userSeedService = app.get(user_seed_service_1.UserSeedService);
    await userSeedService.run();
    await app.close();
};
runSeed();
//# sourceMappingURL=run-seed.js.map