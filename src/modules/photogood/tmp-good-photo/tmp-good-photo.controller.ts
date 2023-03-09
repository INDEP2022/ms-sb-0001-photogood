
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
import { TmpGoodPhotoDto, TmpGoodPhotoSinDto } from './dto/tmp-good-photo.dto';
import { TmpGoodPhotoService } from './tmp-good-photo.service';

@ApiCreatedResponse()
@ApiTags('tmp_bien_foto')
@Controller('tmp-good-photo')
export class TmpGoodPhotoController {
  constructor(private readonly service: TmpGoodPhotoService) {}

  @ApiOperation({ summary: 'Paginación de todos los registros' })
  @ApiResponse({
    status: 200,
    type: [TmpGoodPhotoDto],
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
    type: TmpGoodPhotoSinDto,
  })
  @Get(':id')
  async findOneRegisterById(@Param('id') id: number) {
    return await this.service.findOneRegister(id);
  }

  @ApiOperation({ summary: 'Guardar nuevo registro' })
  @ApiBody({ type: TmpGoodPhotoDto })
  @ApiResponse({
    status: 200,
    description: 'Guarda un nuevo registro',
    type: TmpGoodPhotoSinDto,
  })
  @Post()
  async createNewRegister(@Body() dto: TmpGoodPhotoDto) {
    return await this.service.createNewRegister(dto);
  }

  @ApiOperation({ summary: 'Actualiza un registro' })
  @ApiBody({ type: TmpGoodPhotoDto })
  @ApiParam({
    name: 'id',
    description: 'Identificador.',
  })
  @ApiResponse({
    status: 200,
    description: 'Actualiza un registro',
    type: TmpGoodPhotoSinDto,
  })
  @Put(':id')
  async updateRegister(@Body() dto: TmpGoodPhotoDto, @Param('id') id: number) {
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
