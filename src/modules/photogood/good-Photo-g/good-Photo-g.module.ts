
import { GoodPhotoGService } from './good-Photo-g.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonFilterService } from 'src/shared/service/common-filter.service';
import { GoodPhotoGController } from './good-Photo-g.controller';
import { GoodPhotoGEntity } from '../infrastructure/good-Photo-g.entity';




@Module({
  imports: [TypeOrmModule.forFeature([GoodPhotoGEntity])],
  controllers: [GoodPhotoGController],
  providers: [GoodPhotoGService, CommonFilterService]
})
export class GoodPhotoGModule {}
