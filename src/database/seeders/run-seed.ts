import { NestFactory } from '@nestjs/core';
import { SeedModule } from './seeder.module';
import { UserSeedService } from './users/user-seed.service';

const runSeed = async () => {
  const app = await NestFactory.create(SeedModule);
  const userSeedService = app.get(UserSeedService);

  await userSeedService.run();
  await app.close();
};

runSeed();
