
import { TmpGoodPhotoService } from './tmp-good-photo.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonFilterService } from 'src/shared/service/common-filter.service';
import { TmpGoodPhotoController } from './tmp-good-photo.controller';
import { TmpGoodPhotoEntity } from '../infrastructure/tmp-good-photo.entity';




@Module({
  imports: [TypeOrmModule.forFeature([TmpGoodPhotoEntity])],
  controllers: [TmpGoodPhotoController],
  providers: [TmpGoodPhotoService, CommonFilterService]
})
export class TmpGoodPhotoModule {}
