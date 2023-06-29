import { GoodPhotoEntity } from '../infrastructure/good-photo.entity';
import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginateQuery } from 'nestjs-paginate';
import { BaseService } from 'src/core/interfaces/service.commons';
import { ResponseDataDTO } from 'src/core/interfaces/response.data.dto';
import { CRUDMessages } from 'src/shared/utils/message.enum';
import { ResponseData } from 'src/core/interfaces/responseData.data.dto';

import { CommonFilterService } from 'src/shared/service/common-filter.service';
import { Repository } from 'typeorm';
import {
  GoodPhotoDto,
  GoodPhotoFieldsDTO,
} from './dto/good-photo.dto';

@Injectable()
export class GoodPhotoService extends BaseService<GoodPhotoEntity> {
  constructor(
    @InjectRepository(GoodPhotoEntity)
    private repository: Repository<GoodPhotoEntity>,
    private commonFilterService: CommonFilterService,
  ) {
    super();
  }

  getRepository(): Repository<GoodPhotoEntity> {
    return this.repository;
  }

  async findAllRegisters(
    query: PaginateQuery,
  ): Promise<ResponseDataDTO<GoodPhotoEntity> | any> {
    const queryBuilder = this.repository.createQueryBuilder('table');
    return this.commonFilterService.paginateFilter<GoodPhotoEntity>(
      query,
      this.repository,
      queryBuilder,
      'goodNumber',
    );
  }

  async createNewRegister(dto: GoodPhotoDto) {
    try {
      const value = await this.repository.findOne({where: dto});
      if (value) {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: ['Los ids ya fueron registrados'],
          data: false
        };
      } else {
        const creation = await this.repository.save(dto);
        return {
          statusCode: HttpStatus.OK,
          message: [CRUDMessages.CreateSuccess],
          data: creation,
        };
      }
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: [error.message],
      };
    }
  }

  async findOneRegisterByIds(
    dto: GoodPhotoFieldsDTO,
  ): Promise<ResponseData<GoodPhotoEntity> | any> {
    const { consecNumber, goodNumber } = dto;
    const value = await this.repository.findOne({
      where: { consecNumber, goodNumber },
    });
    return value
      ? {
          statusCode: HttpStatus.OK,
          message: ['Datos obtenidos correctamente.'],
          data: value,
          count: 1,
        }
      : {
          statusCode: HttpStatus.BAD_REQUEST,
          message: ['No se encontraron registros.'],
          data: [],
          count: 0,
        };
  }

  async updateRegister(dto: GoodPhotoDto) {
    const { consecNumber, goodNumber } = dto;
    try {
      const { affected } = await this.repository.update(
        { consecNumber, goodNumber },
        dto,
      );
      if (affected == 1) {
        return {
          statusCode: HttpStatus.OK,
          message: ['Registro actualizado correctamente.'],
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

  async deleteRegister(dto: GoodPhotoFieldsDTO) {
    const { consecNumber, goodNumber } = dto;
    try {
      const { affected } = await this.repository.delete({
        consecNumber,
        goodNumber,
      });
      return affected == 1
        ? {
            statusCode: HttpStatus.OK,
            message: [CRUDMessages.DeleteSuccess],
          }
        : {
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
