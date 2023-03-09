
import { ContainerPhotossiabService } from './container-photossiab.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonFilterService } from 'src/shared/service/common-filter.service';
import { ContainerPhotossiabController } from './container-photossiab.controller';
import { ContainerPhotossiabEntity } from '../infrastructure/container-photossiab.entity';




@Module({
  imports: [TypeOrmModule.forFeature([ContainerPhotossiabEntity])],
  controllers: [ContainerPhotossiabController],
  providers: [ContainerPhotossiabService, CommonFilterService]
})
export class ContainerPhotossiabModule {}
