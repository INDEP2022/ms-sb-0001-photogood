import { PhotoGoodController } from './photos-good.controller';
import { PhotoGoodEntity } from '../infrastructure/photos-good.entity';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonFilterService } from 'src/shared/service/common-filter.service';
import { PhotoGoodsService } from './photos-good.service';

@Module({
  imports: [TypeOrmModule.forFeature([PhotoGoodEntity])],
  controllers: [PhotoGoodController],
  providers: [PhotoGoodsService, CommonFilterService],
})
export class PhotoGoodModule {}
