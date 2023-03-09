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
  TmpGoodsPhotoDto,
  TmpGoodsPhotoSinDto,
} from './dto/tmp-goods-photo.dto';
import { TmpGoodsPhotoService } from './tmp-goods-photo.service';

@ApiCreatedResponse()
@ApiTags('tmp_bienes_foto')
@Controller('tmp-goods-photo')
export class TmpGoodsPhotoController {
  constructor(private readonly service: TmpGoodsPhotoService) {}

  @ApiOperation({ summary: 'Paginación de todos los registros' })
  @ApiResponse({
    status: 200,
    type: [TmpGoodsPhotoDto],
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
    type: TmpGoodsPhotoSinDto,
  })
  @Get(':id')
  async findOneRegisterById(@Param('id') id: number) {
    return await this.service.findOneRegister(id);
  }

  @ApiOperation({ summary: 'Guardar nuevo registro' })
  @ApiBody({ type: TmpGoodsPhotoDto })
  @ApiResponse({
    status: 200,
    description: 'Guarda un nuevo registro',
    type: TmpGoodsPhotoSinDto,
  })
  @Post()
  async createNewRegister(@Body() dto: TmpGoodsPhotoDto) {
    return await this.service.createNewRegister(dto);
  }

  @ApiOperation({ summary: 'Actualiza un registro' })
  @ApiBody({ type: TmpGoodsPhotoDto })
  @ApiParam({
    name: 'id',
    description: 'Identificador.',
  })
  @ApiResponse({
    status: 200,
    description: 'Actualiza un registro',
    type: TmpGoodsPhotoSinDto,
  })
  @Put(':id')
  async updateRegister(
    @Body() dto: TmpGoodsPhotoDto,
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
