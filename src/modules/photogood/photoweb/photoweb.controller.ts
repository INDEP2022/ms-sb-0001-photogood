import { PhotowebDto, PhotowebFieldsDTO } from './dto/photoweb.dto';
import { PhotowebEntity } from '../infrastructure/photoweb.entity';
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
import { PhotowebService as PhotowebService } from './photoweb.service';

@ApiCreatedResponse()
@ApiTags('fotoweb')
@Controller('photoweb')
export class CostDetailsStrategyController {
  constructor(private readonly service: PhotowebService) {}

  getService(): BaseService<PhotowebEntity> {
    return this.service;
  }

  @ApiOperation({ summary: 'Paginación de todos los registros' })
  @ApiResponse({
    status: 200,
    type: [PhotowebDto],
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
    type: PhotowebFieldsDTO,
    description: 'Busca por su identificador',
  })
  @ApiResponse({
    status: 200,
    type: PhotowebDto,
  })
  @Post('find-by-ids')
  async findOneRegisterByIds(@Body() dto: PhotowebFieldsDTO) {
    return await this.service.findOneRegisterByIds(dto);
  }

  @ApiOperation({ summary: 'Guardar nuevo registro' })
  @ApiBody({ type: PhotowebDto })
  @ApiResponse({
    status: 200,
    description: 'Guarda un nuevo registro',
    type: PhotowebDto,
  })
  @Post()
  async createRegister(@Body() dto: PhotowebDto) {
    return await this.service.create(dto);
  }

  @ApiOperation({ summary: 'Actualiza un registro' })
  @ApiBody({ type: PhotowebDto })
  @ApiResponse({
    status: 200,
    description: 'Actualiza un registro',
    type: PhotowebDto,
  })
  @Put()
  async updateRegister(@Body() dto: PhotowebDto) {
    return this.service.updateRegister(dto);
  }

  @ApiOperation({ summary: 'Elimina un registro por identificador' })
  @ApiBody({
    type: PhotowebFieldsDTO,
    description: 'Identificador tabla',
  })
  @Delete()
  async deleteRegister(@Body() dto: PhotowebFieldsDTO) {
    return await this.service.deleteRegister(dto);
  }
}
