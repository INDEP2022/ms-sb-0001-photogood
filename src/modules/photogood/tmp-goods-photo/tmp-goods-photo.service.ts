import { CtrlGoodsPhotoEntity } from './../infrastructure/ctrl-goods-photo.entity';
import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginateQuery } from 'nestjs-paginate';
import { CRUDMessages } from 'src/shared/utils/message.enum';

import { Repository } from 'typeorm';
import { CommonFilterService } from '../../../shared/service/common-filter.service';
import { TmpGoodsPhotoEntity } from '../infrastructure/tmp-goods-photo.entity';
import { TmpGoodsPhotoDto } from './dto/tmp-goods-photo.dto';

@Injectable()
export class TmpGoodsPhotoService {
  constructor(
    @InjectRepository(TmpGoodsPhotoEntity)
    private repository: Repository<TmpGoodsPhotoEntity>,
    private commonFilterService: CommonFilterService,
  ) {}

  async findAllRegisters(query: PaginateQuery) {
    const queryBuilder = this.repository.createQueryBuilder('table');
    queryBuilder.leftJoinAndMapOne(
      'table.goodPhoto',
      CtrlGoodsPhotoEntity,
      'ch',
      'table.id_control = ch.id_control',
    );
    return await this.commonFilterService.paginateFilter<TmpGoodsPhotoEntity>(
      query,
      this.repository,
      queryBuilder,
      'id',
    );
  }

  async findOneRegister(id: number) {
    const value = await this.repository.findOne({ where: { id: id } });
    return value
      ? {
          statusCode: HttpStatus.OK,
          message: [CRUDMessages.GetSuccess],
          data: value,
          count: 1,
        }
      : {
          statusCode: HttpStatus.BAD_REQUEST,
          message: [CRUDMessages.GetNotfound],
          data: [],
          count: 0,
        };
  }

  async createNewRegister(dto: TmpGoodsPhotoDto) {
    try {
      const creation = await this.repository.save(dto);

      return {
        statusCode: HttpStatus.OK,
        message: [CRUDMessages.CreateSuccess],
        data: creation,
      };
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: [error.message],
      };
    }
  }

  async updateRegister(dto: TmpGoodsPhotoDto, id: number) {
    try {
      const { affected } = await this.repository.update({ id: id }, dto);
      if (affected == 1) {
        return {
          statusCode: HttpStatus.OK,
          message: [CRUDMessages.UpdateSuccess],
        };
      } else
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: ['El registro no existe!'],
        };
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: [error.message],
      };
    }
  }

  async deleteRegister(id: number) {
    try {
      const { affected } = await this.repository.delete({ id: id });
      if (affected == 1) {
        return {
          statusCode: HttpStatus.OK,
          message: [CRUDMessages.DeleteSuccess],
        };
      } else
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: ['El registro no existe!'],
        };
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: [error.message],
      };
    }
  }
}
