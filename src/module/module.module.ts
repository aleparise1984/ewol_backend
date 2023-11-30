import { Module } from '@nestjs/common';
import { ModuleService } from './module.service';
import { ModuleController } from './module.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModuleItem } from './entities/module_items.entity';
import { Module as ModuleEntity } from './entities/module.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ModuleEntity, ModuleItem])],
  controllers: [ModuleController],
  providers: [ModuleService],
})
export class ModuleModule {}
