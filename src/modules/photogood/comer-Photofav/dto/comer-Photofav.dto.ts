import { ApiProperty } from '@nestjs/swagger';
import { Message } from 'src/shared/utils/message.decorator';
import { IsOptional, IsNumber, Max } from 'class-validator';
import { Type } from 'class-transformer';

export class ComerPhotofavDto {
  @Type(() => Number)
  @IsNumber({}, { message: Message.NUMBER('$property') })
  @Max(9999999, { message: 'El maximo valor de id_evento debe ser 9999999' })

  @ApiProperty({
    title: 'id_evento',
    example: 'Dato de tipo numérico',
    required: false,
  })
  eventId: number;

  @Type(() => Number)
  @IsNumber({}, { message: Message.NUMBER('$property') })
  @Max(9999999999, {
    message: 'El maximo valor de id_lote debe ser 9999999999',
  })

  @ApiProperty({
    title: 'id_lote',
    example: 'Dato de tipo numérico',
    required: false,
  })
  batchId: number;

  @Type(() => Number)
  @IsNumber({}, { message: Message.NUMBER('$property') })
  @Max(9999999999, {
    message: 'El maximo valor de no_bien debe ser 9999999999',
  })

  @ApiProperty({
    title: 'no_bien',
    example: 'Dato de tipo numérico',
    required: false,
  })
  goodNumber: number;

  @Type(() => Number)
  @IsNumber({}, { message: Message.NUMBER('$property') })
  @Max(999, { message: 'El maximo valor de no_consec debe ser 999' })

  @ApiProperty({
    title: 'no_consec',
    example: 'Dato de tipo numérico',
    required: false,
  })
  consecNumber: number;
}

export class ComerPhotofavFieldsDTO {
  @Type(() => Number)
  @IsNumber({}, { message: Message.NUMBER('$property') })
  @Max(9999999, { message: 'El maximo valor de id_evento debe ser 9999999' })
  @ApiProperty({
    title: 'id_evento',
    example: 'Dato de tipo numérico',
    required: false,
  })
  eventId: number;

  @Type(() => Number)
  @IsNumber({}, { message: Message.NUMBER('$property') })
  @Max(9999999999, {
    message: 'El maximo valor de id_lote debe ser 9999999999',
  })
  @ApiProperty({
    title: 'id_lote',
    example: 'Dato de tipo numérico',
    required: false,
  })
  batchId: number;

  @Type(() => Number)
  @IsNumber({}, { message: Message.NUMBER('$property') })
  @Max(9999999999, {
    message: 'El maximo valor de no_bien debe ser 9999999999',
  })
  @ApiProperty({
    title: 'no_bien',
    example: 'Dato de tipo numérico',
    required: false,
  })
  goodNumber: number;
}
