import { ApiProperty } from '@nestjs/swagger';
import { Message } from 'sigebi-lib-common';
import { IsOptional, IsNumber, Max } from 'class-validator';
import { Type } from 'class-transformer';

export class PhotographsGoodsDto {

  @Type(() => Number)
  @IsNumber({}, { message: Message.NUMBER('$property') })
  @Max(9999999999, {
    message: 'El maximo valor de no_registro debe ser 9999999999',
  })
  @IsOptional()
  @ApiProperty({
    title: 'no_registro',
    example: 'Dato de tipo numérico',
    required: false,
  })
  recordNumber: number;

  @Type(() => Number)
  @IsNumber({}, { message: Message.NUMBER('$property') })
  @Max(9999999999, {
    message: 'El maximo valor de no_registro debe ser 9999999999',
  })
  @IsOptional()
  @ApiProperty({
    title: 'fotografia',
    example: 'Dato de tipo numérico',
    required: false,
  })
  Photography: number;
}

export class PhotographsGoodsSinDto {
  @Type(() => Number)
  @IsNumber({}, { message: Message.NUMBER('$property') })
  @Max(9999999999, {
    message: 'El maximo valor de no_bien debe ser 9999999999',
  })
  @ApiProperty({
    title: 'no_bien',
    example: 'Dato de tipo numérico',
    required: true,
  })
  id: number;

  @Type(() => Number)
  @IsNumber({}, { message: Message.NUMBER('$property') })
  @Max(9999999999, {
    message: 'El maximo valor de no_registro debe ser 9999999999',
  })
  @IsOptional()
  @ApiProperty({
    title: 'no_registro',
    example: 'Dato de tipo numérico',
    required: false,
  })
  recordNumber: number;

  @Type(() => Number)
  @IsNumber({}, { message: Message.NUMBER('$property') })
  @Max(9999999999, {
    message: 'El maximo valor de no_registro debe ser 9999999999',
  })
  @IsOptional()
  @ApiProperty({
    title: 'fotografia',
    example: 'Dato de tipo numérico',
    required: false,
  })
  Photography: number;
}

