import { CostDetailsStrategyController } from './photoweb.controller';
import { PhotowebEntity } from '../infrastructure/photoweb.entity';
import { PhotowebService } from './photoweb.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonFilterService } from 'src/shared/service/common-filter.service';

@Module({
  imports: [TypeOrmModule.forFeature([PhotowebEntity])],
  controllers: [CostDetailsStrategyController],
  providers: [PhotowebService, CommonFilterService],
})
export class PhotowebModule {}
