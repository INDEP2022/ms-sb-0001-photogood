
import { PhotographsGoodsService } from './photographs-goods.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonFilterService } from 'src/shared/service/common-filter.service';
import { PhotographsGoodsController } from './photographs-goods.controller';
import { PhotographsGoodsEntity } from '../infrastructure/photographs-goods.entity';




@Module({
  imports: [TypeOrmModule.forFeature([PhotographsGoodsEntity])],
  controllers: [PhotographsGoodsController],
  providers: [PhotographsGoodsService, CommonFilterService]
})
export class PhotographsGoodsModule {}
