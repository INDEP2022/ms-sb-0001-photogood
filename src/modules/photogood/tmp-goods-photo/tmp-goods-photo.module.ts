import { TmpGoodsPhotoEntity } from './../infrastructure/tmp-goods-photo.entity';

import { TmpGoodsPhotoService } from './tmp-goods-photo.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonFilterService } from 'src/shared/service/common-filter.service';
import { TmpGoodsPhotoController } from './tmp-goods-photo.controller';






@Module({
  imports: [TypeOrmModule.forFeature([TmpGoodsPhotoEntity])],
  controllers: [TmpGoodsPhotoController],
  providers: [TmpGoodsPhotoService, CommonFilterService]
})
export class TmpGoodsPhotoModule {}
