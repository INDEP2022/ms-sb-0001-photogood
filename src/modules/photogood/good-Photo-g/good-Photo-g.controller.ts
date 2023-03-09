
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
import { GoodPhotoGDto } from './dto/good-Photo-g.dto';
import { GoodPhotoGService } from './good-Photo-g.service';

@ApiCreatedResponse()
@ApiTags('bienes_foto_g')
@Controller('good-Photo-g')
export class GoodPhotoGController {
  constructor(private readonly service: GoodPhotoGService) {}

  @ApiOperation({ summary: 'Paginación de todos los registros' })
  @ApiResponse({
    status: 200,
    type: [GoodPhotoGDto],
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
    type: GoodPhotoGDto,
  })
  @Get(':id')
  async findOneRegisterById(@Param('id') id: number) {
    return await this.service.findOneRegister(id);
  }

  @ApiOperation({ summary: 'Guardar nuevo registro' })
  @ApiBody({ type: GoodPhotoGDto })
  @ApiResponse({
    status: 200,
    description: 'Guarda un nuevo registro',
    type: GoodPhotoGDto,
  })
  @Post()
  async createNewRegister(@Body() dto: GoodPhotoGDto) {
    return await this.service.createNewRegister(dto);
  }

  @ApiOperation({ summary: 'Actualiza un registro' })
  @ApiBody({ type: GoodPhotoGDto })
  @ApiParam({
    name: 'id',
    description: 'Identificador.',
  })
  @ApiResponse({
    status: 200,
    description: 'Actualiza un registro',
    type: GoodPhotoGDto,
  })
  @Put(':id')
  async updateRegister(@Body() dto: GoodPhotoGDto, @Param('id') id: any) {
    return await this.service.updateRegister(dto, id);
  }

  @ApiOperation({ summary: 'Elimina un registro por identificador' })
  @ApiParam({
    name: 'id',
    description: 'Busca por su identificador',
  })
  @Delete(':id')
  async deleteRegister(@Param('id') id: any) {
    return await this.service.deleteRegister(id);
  }
}
