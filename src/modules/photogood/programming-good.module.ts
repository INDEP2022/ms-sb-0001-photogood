import { PhotographsGoodsModule } from './photographs-goods/photographs-goods.module';
import { CtrlGoodsPhotoModule } from './ctrl-goods-photo/ctrl-goods-photo.module';
import { Module } from '@nestjs/common';
import { MediumGoodPhotographyModule } from './medium-good-photography/medium-good-photography.module';
import { GoodPhotoGModule } from './good-Photo-g/good-Photo-g.module';
import { ComerPhotofavModule } from './comer-Photofav/comer-Photofav.module';
import { PhotoGoodModule } from './photos-good/photos-good.module';
import { PhotowebModule } from './photoweb/photoweb.module';
import { GoodPhotoModule } from './good-photo/good-photo.module';
import { TmpGoodPhotoModule } from './tmp-good-photo/tmp-good-photo.module';
import { ContainerPhotossiabModule } from './container-photossiab/container-photossiab.module';
import { TmpGoodsPhotoModule } from './tmp-goods-photo/tmp-goods-photo.module';

@Module({
  imports: [
    ComerPhotofavModule,
    ContainerPhotossiabModule,
    CtrlGoodsPhotoModule,
    GoodPhotoModule,
    GoodPhotoGModule,
    MediumGoodPhotographyModule,
    PhotographsGoodsModule,
    PhotoGoodModule,
    PhotowebModule,
    TmpGoodPhotoModule,
    TmpGoodsPhotoModule,
  ],
  providers: [],
  controllers: [],
})
export class PhotogoodModule {}
