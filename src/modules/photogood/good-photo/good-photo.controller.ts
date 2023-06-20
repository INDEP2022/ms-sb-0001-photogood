import {
  GoodPhotoDto,
  GoodPhotoFieldsDTO,
} from './dto/good-photo.dto';
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
import { BaseService } from 'src/core/interfaces/service.commons';
import { GoodPhotoService } from './good-photo.service';
import { GoodPhotoEntity } from '../infrastructure/good-photo.entity';

@ApiCreatedResponse()
@ApiTags('bienes_foto')
@Controller('good-photo')
export class GoodPhotoController {
  constructor(private readonly service: GoodPhotoService) {}

  getService(): BaseService<GoodPhotoEntity> {
    return this.service;
  }

  @ApiOperation({ summary: 'Paginación de todos los registros' })
  @ApiResponse({
    status: 200,
    type: [GoodPhotoDto],
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
    type: GoodPhotoFieldsDTO,
    description: 'Busca por su identificador',
  })
  @ApiResponse({
    status: 200,
    type: GoodPhotoDto,
  })
  @Post('find-by-ids')
  async findOneRegisterByIds(@Body() dto: GoodPhotoFieldsDTO) {
    return await this.service.findOneRegisterByIds(dto);
  }

  @ApiOperation({ summary: 'Guardar nuevo registro' })
  @ApiBody({ type: GoodPhotoDto })
  @ApiResponse({
    status: 200,
    description: 'Guarda un nuevo registro',
    type: GoodPhotoDto,
  })
  @Post()
  async createRegister(@Body() dto: GoodPhotoDto) {
    return await this.service.create(dto);
  }

  @ApiOperation({ summary: 'Actualiza un registro' })
  @ApiBody({ type: GoodPhotoDto })
  @ApiResponse({
    status: 200,
    description: 'Actualiza un registro',
    type: GoodPhotoDto,
  })
  @Put()
  async updateRegister(@Body() dto: GoodPhotoDto) {
    return this.service.updateRegister(dto);
  }

  @ApiOperation({ summary: 'Elimina un registro por identificador' })
  @ApiBody({
    type: GoodPhotoFieldsDTO,
    description: 'Identificador tabla',
  })
  @Delete()
  async deleteRegister(@Body() dto: GoodPhotoFieldsDTO) {
    return await this.service.deleteRegister(dto);
  }
}
