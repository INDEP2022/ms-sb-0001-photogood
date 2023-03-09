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
import { PhotowebDto, PhotowebFieldsDTO } from './dto/photoweb.dto';
import { PhotowebEntity } from '../infrastructure/photoweb.entity';

@Injectable()
export class PhotowebService extends BaseService<PhotowebEntity> {
  constructor(
    @InjectRepository(PhotowebEntity)
    private repository: Repository<PhotowebEntity>,
    private commonFilterService: CommonFilterService,
  ) {
    super();
  }

  getRepository(): Repository<PhotowebEntity> {
    return this.repository;
  }

  async findAllRegisters(
    query: PaginateQuery,
  ): Promise<ResponseDataDTO<PhotowebEntity> | any> {
    const queryBuilder = this.repository.createQueryBuilder('table');
    return this.commonFilterService.paginateFilter<PhotowebEntity>(
      query,
      this.repository,
      queryBuilder,
      'photoId',
    );
  }

  async createNewRegister(dto: PhotowebDto) {
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
    dto: PhotowebFieldsDTO,
  ): Promise<ResponseData<PhotowebEntity> | any> {
    const { propertyId, photoId } = dto;
    const value = await this.repository.findOne({
      where: { propertyId, photoId },
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

  async updateRegister(dto: PhotowebDto) {
    const { propertyId, photoId } = dto;
    try {
      const { affected } = await this.repository.update(
        { propertyId, photoId },
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

  async deleteRegister(dto: PhotowebFieldsDTO) {
    const { propertyId, photoId } = dto;
    try {
      const { affected } = await this.repository.delete({
        propertyId,
        photoId,
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
