import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginateQuery } from 'nestjs-paginate';
import { CRUDMessages } from 'sigebi-lib-common';
import { Repository } from 'typeorm';
import { TmpGoodPhotoDto, TmpGoodPhotoSinDto } from './dto/tmp-good-photo.dto';
import { CommonFilterService } from '../../../shared/service/common-filter.service';
import { TmpGoodPhotoEntity } from '../infrastructure/tmp-good-photo.entity';

@Injectable()
export class TmpGoodPhotoService {
  constructor(
    @InjectRepository(TmpGoodPhotoEntity)
    private repository: Repository<TmpGoodPhotoEntity>,
    private commonFilterService: CommonFilterService,
  ) {}

  async findAllRegisters(query: PaginateQuery) {
    const queryBuilder = this.repository.createQueryBuilder('table');
    return await this.commonFilterService.paginateFilter<TmpGoodPhotoEntity>(
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

  async createNewRegister(dto: TmpGoodPhotoDto) {
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

  async updateRegister(dto: TmpGoodPhotoDto, id: number) {
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
