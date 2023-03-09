import { GoodPhotoEntity } from '../infrastructure/good-photo.entity';
import { GoodPhotoController } from './good-photo.controller';
import { GoodPhotoService } from './good-photo.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonFilterService } from 'src/shared/service/common-filter.service';

@Module({
  imports: [TypeOrmModule.forFeature([GoodPhotoEntity])],
  controllers: [GoodPhotoController],
  providers: [GoodPhotoService, CommonFilterService],
})
export class GoodPhotoModule {}
