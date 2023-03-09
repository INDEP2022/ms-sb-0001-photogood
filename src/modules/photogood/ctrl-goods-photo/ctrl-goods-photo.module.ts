
import { CtrlGoodsPhotoService } from './ctrl-goods-photo.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonFilterService } from 'src/shared/service/common-filter.service';
import { CtrlGoodsPhotoController } from './ctrl-goods-photo.controller';
import { CtrlGoodsPhotoEntity } from '../infrastructure/ctrl-goods-photo.entity';




@Module({
  imports: [TypeOrmModule.forFeature([CtrlGoodsPhotoEntity])],
  controllers: [CtrlGoodsPhotoController],
  providers: [CtrlGoodsPhotoService, CommonFilterService]
})
export class CtrlGoodsPhotoModule {}
