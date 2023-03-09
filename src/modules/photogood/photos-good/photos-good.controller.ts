import { PhotoGoodDto, PhotoGoodFieldsDTO } from './dto/good-photos.dto';
import { PhotoGoodEntity } from '../infrastructure/photos-good.entity';
import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Paginate, PaginateQuery } from 'nestjs-paginate';
import { BaseService } from 'sigebi-lib-common';
import { PhotoGoodsService } from './photos-good.service';

@ApiCreatedResponse()
@ApiTags('fotos_bienes')
@Controller('photos-good')
export class PhotoGoodController {
  constructor(private readonly service: PhotoGoodsService) {}

  getService(): BaseService<PhotoGoodEntity> {
    return this.service;
  }

  @ApiOperation({ summary: 'Paginación de todos los registros' })
  @ApiResponse({
    status: 200,
    type: [PhotoGoodDto],
  })
  @ApiQuery({
    name: 'page',
    description: 'Número de página',
    type: Number,
    required: false,
  })
  @ApiQuery({
    name: 'limit',
    description: 'Limite de elementos',
    type: Number,
    required: false,
  })
  @ApiQuery({
    name: 'search',
    description: 'Texto a buscar',
    type: String,
    required: false,
  })
  @Get()
  async findAllComerUsuxtpevents(@Paginate() query: PaginateQuery) {
    return await this.service.findAllRegisters(query);
  }

  @ApiOperation({ summary: 'Busca por su identificador' })
  @ApiBody({
    type: PhotoGoodFieldsDTO,
    description: 'Busca por su identificador',
  })
  @ApiResponse({
    status: 200,
    type: PhotoGoodDto,
  })
  @Post('find-by-ids')
  async findOneRegisterByIds(@Body() dto: PhotoGoodFieldsDTO) {
    return await this.service.findOneRegisterByIds(dto);
  }

  @ApiOperation({ summary: 'Guardar nuevo registro' })
  @ApiBody({ type: PhotoGoodDto })
  @ApiResponse({
    status: 200,
    description: 'Guarda un nuevo registro',
    type: PhotoGoodDto,
  })
  @Post()
  async createRegister(@Body() dto: PhotoGoodDto) {
    return await this.service.create(dto);
  }

  @ApiOperation({ summary: 'Actualiza un registro' })
  @ApiBody({ type: PhotoGoodDto })
  @ApiResponse({
    status: 200,
    description: 'Actualiza un registro',
    type: PhotoGoodDto,
  })
  @Put()
  async updateRegister(@Body() dto: PhotoGoodDto) {
    return this.service.updateRegister(dto);
  }

  @ApiOperation({ summary: 'Elimina un registro por identificador' })
  @ApiBody({
    type: PhotoGoodFieldsDTO,
    description: 'Identificador tabla',
  })
  @Delete()
  async deleteRegister(@Body() dto: PhotoGoodFieldsDTO) {
    return await this.service.deleteRegister(dto);
  }
}
