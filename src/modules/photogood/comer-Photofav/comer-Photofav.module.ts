import { ComerPhotofavController } from './comer-Photofav.controller';
import { ComerPhotofavEntity } from '../infrastructure/comer-Photofav.entity';
import { ComerPhotofavService } from './comer-Photofav.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonFilterService } from 'src/shared/service/common-filter.service';

@Module({
  imports: [TypeOrmModule.forFeature([ComerPhotofavEntity])],
  controllers: [ComerPhotofavController],
  providers: [ComerPhotofavService, CommonFilterService],
})
export class ComerPhotofavModule {}
