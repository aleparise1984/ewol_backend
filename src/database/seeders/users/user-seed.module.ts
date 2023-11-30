import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/users.entity';
import { UsersModule } from 'src/users/users.module';
import { UserSeedService } from './user-seed.service';

@Module({
  imports: [TypeOrmModule.forFeature([User]), UsersModule],
  providers: [UserSeedService],
  exports: [UserSeedService],
})
export class UserSeedModule {}
