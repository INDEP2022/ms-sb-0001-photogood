import { MediumGoodPhotographyService } from './medium-good-photography.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonFilterService } from 'src/shared/service/common-filter.service';
import { MediumGoodPhotographyController } from './medium-good-photography.controller';
import { MediumGoodPhotographyEntity } from '../infrastructure/medium-good-photography.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MediumGoodPhotographyEntity])],
  controllers: [MediumGoodPhotographyController],
  providers: [MediumGoodPhotographyService, CommonFilterService],
})
export class MediumGoodPhotographyModule {}
