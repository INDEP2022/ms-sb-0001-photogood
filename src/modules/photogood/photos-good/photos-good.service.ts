import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginateQuery } from 'nestjs-paginate';
import {
  BaseService,
  ResponseData,
  ResponseDataDTO,
  CRUDMessages,
} from 'sigebi-lib-common';
import { CommonFilterService } from 'src/shared/service/common-filter.service';
import { Repository } from 'typeorm';
import { PhotoGoodDto, PhotoGoodFieldsDTO } from './dto/good-photos.dto';
import { PhotoGoodEntity } from '../infrastructure/photos-good.entity';

@Injectable()
export class PhotoGoodsService extends BaseService<PhotoGoodEntity> {
  constructor(
    @InjectRepository(PhotoGoodEntity)
    private repository: Repository<PhotoGoodEntity>,
    private commonFilterService: CommonFilterService,
  ) {
    super();
  }

  getRepository(): Repository<PhotoGoodEntity> {
    return this.repository;
  }

  async findAllRegisters(
    query: PaginateQuery,
  ): Promise<ResponseDataDTO<PhotoGoodEntity> | any> {
    const queryBuilder = this.repository.createQueryBuilder('table');
    return this.commonFilterService.paginateFilter<PhotoGoodEntity>(
      query,
      this.repository,
      queryBuilder,
      'file',
    );
  }

  async createNewRegister(dto: PhotoGoodDto) {
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
    dto: PhotoGoodFieldsDTO,
  ): Promise<ResponseData<PhotoGoodEntity> | any> {
    const { location, file } = dto;
    const value = await this.repository.findOne({
      where: { location, file },
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

  async updateRegister(dto: PhotoGoodDto) {
    const { location, file } = dto;
    try {
      const { affected } = await this.repository.update(
        { location, file },
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

  async deleteRegister(dto: PhotoGoodFieldsDTO) {
    const { location, file } = dto;
    try {
      const { affected } = await this.repository.delete({
        location,
        file,
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
