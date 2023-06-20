import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginateQuery } from 'nestjs-paginate';
import { BaseService } from 'src/core/interfaces/service.commons';
import { ResponseDataDTO } from 'src/core/interfaces/response.data.dto';
import { CRUDMessages } from 'src/shared/utils/message.enum';
import { ResponseData } from 'src/core/interfaces/responseData.data.dto';

import { CommonFilterService } from 'src/shared/service/common-filter.service';
import { Repository } from 'typeorm';
import { ComerPhotofavDto, ComerPhotofavFieldsDTO } from './dto/comer-Photofav.dto';
import { ComerPhotofavEntity } from '../infrastructure/comer-Photofav.entity';

@Injectable()
export class ComerPhotofavService extends BaseService<ComerPhotofavEntity> {
  constructor(
    @InjectRepository(ComerPhotofavEntity)
    private repository: Repository<ComerPhotofavEntity>,
    private commonFilterService: CommonFilterService,
  ) {
    super();
  }

  getRepository(): Repository<ComerPhotofavEntity> {
    return this.repository;
  }

  async findAllRegisters(
    query: PaginateQuery,
  ): Promise<ResponseDataDTO<ComerPhotofavEntity> | any> {
    return this.commonFilterService.paginateFilter<ComerPhotofavEntity>(
      query,
      this.repository,
      null,
      'batchId',
    );
  }

  async createNewRegister(dto: ComerPhotofavDto) {
    try {
      const value = await this.findOneRegisterByIds(dto);
      if (value.count > 0) {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: ['Los ids ya fueron registrados'],
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
    dto: ComerPhotofavFieldsDTO,
  ): Promise<ResponseData<ComerPhotofavEntity> | any> {
    const { eventId, batchId, goodNumber } = dto;
    const value = await this.repository.findOne({
      where: { eventId, batchId, goodNumber },
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

  async updateRegister(dto: ComerPhotofavDto) {
    const { eventId, batchId, goodNumber } = dto;
    try {
      const { affected } = await this.repository.update(
        { eventId, batchId, goodNumber },
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

  async deleteRegister(dto: ComerPhotofavFieldsDTO) {
    const { eventId, batchId, goodNumber } = dto;
    try {
      const { affected } = await this.repository.delete({
        eventId,
        batchId,
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
