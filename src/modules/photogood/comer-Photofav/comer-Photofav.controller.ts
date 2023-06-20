import {
  ComerPhotofavDto,
  ComerPhotofavFieldsDTO,
} from './dto/comer-Photofav.dto';
import { ComerPhotofavEntity } from '../infrastructure/comer-Photofav.entity';
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
import { ComerPhotofavService } from './comer-Photofav.service';

@ApiCreatedResponse()
@ApiTags('comer_fotofav')
@Controller('comer-Photofav')
export class ComerPhotofavController {
  constructor(private readonly service: ComerPhotofavService) {}

  getService(): BaseService<ComerPhotofavEntity> {
    return this.service;
  }

  @ApiOperation({ summary: 'Paginación de todos los registros' })
  @ApiResponse({
    status: 200,
    type: [ComerPhotofavDto],
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
    type: ComerPhotofavFieldsDTO,
    description: 'Busca por su identificador',
  })
  @ApiResponse({
    status: 200,
    type: ComerPhotofavDto,
  })
  @Post('find-by-ids')
  async findOneRegisterByIds(@Body() dto: ComerPhotofavFieldsDTO) {
    return await this.service.findOneRegisterByIds(dto);
  }

  @ApiOperation({ summary: 'Guardar nuevo registro' })
  @ApiBody({ type: ComerPhotofavDto })
  @ApiResponse({
    status: 200,
    description: 'Guarda un nuevo registro',
    type: ComerPhotofavDto,
  })
  @Post()
  async createRegister(@Body() dto: ComerPhotofavDto) {
    return await this.service.create(dto);
  }

  @ApiOperation({ summary: 'Actualiza un registro' })
  @ApiBody({ type: ComerPhotofavDto })
  @ApiResponse({
    status: 200,
    description: 'Actualiza un registro',
    type: ComerPhotofavDto,
  })
  @Put()
  async updateRegister(@Body() dto: ComerPhotofavDto) {
    return this.service.updateRegister(dto);
  }

  @ApiOperation({ summary: 'Elimina un registro por identificador' })
  @ApiBody({
    type: ComerPhotofavFieldsDTO,
    description: 'Identificador tabla',
  })
  @Delete()
  async deleteRegister(@Body() dto: ComerPhotofavFieldsDTO) {
    return await this.service.deleteRegister(dto);
  }
}
