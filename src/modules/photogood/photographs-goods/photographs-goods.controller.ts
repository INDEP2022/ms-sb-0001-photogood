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
import { PhotographsGoodsDto, PhotographsGoodsSinDto } from './dto/photographs-goods.dto';
import { PhotographsGoodsService } from './photographs-goods.service';

@ApiCreatedResponse()
@ApiTags('fotografias_bienes')
@Controller('photographs-goods')
export class PhotographsGoodsController {
  constructor(private readonly service: PhotographsGoodsService) {}

  @ApiOperation({ summary: 'Paginación de todos los registros' })
  @ApiResponse({
    status: 200,
    type: [PhotographsGoodsDto],
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
    type: PhotographsGoodsDto,
  })
  @Get(':id')
  async findOneRegisterById(@Param('id') id: number) {
    return await this.service.findOneRegister(id);
  }

  @ApiOperation({ summary: 'Guardar nuevo registro' })
  @ApiBody({ type: PhotographsGoodsSinDto })
  @ApiResponse({
    status: 200,
    description: 'Guarda un nuevo registro',
    type: PhotographsGoodsSinDto,
  })
  @Post()
  async createNewRegister(@Body() dto: PhotographsGoodsSinDto) {
    return await this.service.createNewRegister(dto);
  }

  @ApiOperation({ summary: 'Actualiza un registro' })
  @ApiBody({ type: PhotographsGoodsDto })
  @ApiParam({
    name: 'id',
    description: 'Identificador.',
  })
  @ApiResponse({
    status: 200,
    description: 'Actualiza un registro',
    type: PhotographsGoodsSinDto,
  })
  @Put(':id')
  async updateRegister(
    @Body() dto: PhotographsGoodsDto,
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
