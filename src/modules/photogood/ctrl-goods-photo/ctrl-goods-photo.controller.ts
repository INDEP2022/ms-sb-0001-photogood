import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Paginate, PaginateQuery } from 'nestjs-paginate';
import {
  CtrlGoodsPhotoDto,
  CtrlGoodsPhotoSinDto,
} from './dto/ctrl-goods-photo.dto';
import { CtrlGoodsPhotoService } from './ctrl-goods-photo.service';

@ApiCreatedResponse()
@ApiTags('ctrl_bienes_foto')
@Controller('ctrl-goods-photo')
export class CtrlGoodsPhotoController {
  constructor(private readonly service: CtrlGoodsPhotoService) {}

  @ApiOperation({ summary: 'Paginación de todos los registros' })
  @ApiResponse({
    status: 200,
    type: [CtrlGoodsPhotoDto],
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
  async findAllRegisters(@Paginate() query: PaginateQuery) {
    return await this.service.findAllRegisters(query);
  }

  @ApiOperation({ summary: 'Busca por su identificador' })
  @ApiParam({
    name: 'id',
    description: 'Busca por su identificador',
  })
  @ApiResponse({
    status: 200,
    type: CtrlGoodsPhotoDto,
  })
  @Get(':id')
  async findOneRegisterById(@Param('id') id: number) {
    return await this.service.findOneRegister(id);
  }

  @ApiOperation({ summary: 'Guardar nuevo registro' })
  @ApiBody({ type: CtrlGoodsPhotoDto })
  @ApiResponse({
    status: 200,
    description: 'Guarda un nuevo registro',
    type: CtrlGoodsPhotoSinDto,
  })
  @Post()
  async createNewRegister(@Body() dto: CtrlGoodsPhotoDto) {
    return await this.service.createNewRegister(dto);
  }

  @ApiOperation({ summary: 'Actualiza un registro' })
  @ApiBody({ type: CtrlGoodsPhotoDto })
  @ApiParam({
    name: 'id',
    description: 'Identificador.',
  })
  @ApiResponse({
    status: 200,
    description: 'Actualiza un registro',
    type: CtrlGoodsPhotoSinDto,
  })
  @Put(':id')
  async updateRegister(
    @Body() dto: CtrlGoodsPhotoSinDto,
    @Param('id') id: number,
  ) {
    return await this.service.updateRegister(dto, id);
  }

  @ApiOperation({ summary: 'Elimina un registro por identificador' })
  @ApiParam({
    name: 'id',
    description: 'Busca por su identificador',
  })
  @Delete(':id')
  async deleteRegister(@Param('id') id: number) {
    return await this.service.deleteRegister(id);
  }
}
