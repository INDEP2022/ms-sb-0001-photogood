import { ApiProperty } from '@nestjs/swagger';
import { Message } from 'sigebi-lib-common';
import {
  IsOptional,
  IsNumber,
  Max,
  IsDate,
  IsString,
  Length,
} from 'class-validator';
import { Type } from 'class-transformer';

export class GoodPhotoGDto {
  @Type(() => Number)
  @IsNumber({}, { message: Message.NUMBER('$property') })
  @Max(9999999999, {
    message: 'El maximo valor de no_bien debe ser 9999999999',
  })
  @IsOptional()
  @ApiProperty({
    title: 'no_bien',
    example: 'Dato de tipo numérico',
    required: false,
  })
  goodNumber: number;

  @Type(() => Number)
  @IsNumber({}, { message: Message.NUMBER('$property') })
  @Max(9999999999, {
    message: 'El maximo valor de no_consec debe ser 9999999999',
  })
  @IsOptional()
  @ApiProperty({
    title: 'no_consec',
    example: 'Dato de tipo numérico',
    required: false,
  })
  consecNumber: number;

  @Type(() => Date)
  @IsDate({ message: Message.IsDate('$property') })
  @IsOptional()
  @ApiProperty({ title: 'fec_foto', example: 'Dato de tipo fecha' })
  datePhoto: Date;

  @Type(() => String)
  @IsString({ message: Message.STRING('$property') })
  @Length(1, 150, {
    message: Message.LENGTH('$property', '$constraint1 $constraint2'),
  })
  @IsOptional()
  @ApiProperty({
    title: 'ubicacion',
    example: 'Dato de tipo texto',
    required: false,
  })
  location: string;

  @Type(() => Date)
  @IsDate({ message: Message.IsDate('$property') })
  @IsOptional()
  @ApiProperty({ title: 'fec_foto_hc', example: 'Dato de tipo fecha' })
  datePhotoHc: Date;

  @Type(() => Number)
  @IsNumber({}, { message: Message.NUMBER('$property') })
  @Max(9999999999, {
    message: 'El maximo valor de existe_nsbdb debe ser 9999999999',
  })
  @IsOptional()
  @ApiProperty({
    title: 'existe_nsbdb',
    example: 'Dato de tipo numérico',
    required: false,
  })
  existsnsbdb: number;

  @Type(() => Number)
  @IsNumber({}, { message: Message.NUMBER('$property') })
  @Max(9999999999, {
    message: 'El maximo valor de no_gestion debe ser 9999999999',
  })
  @IsOptional()
  @ApiProperty({
    title: 'no_gestion',
    example: 'Dato de tipo numérico',
    required: false,
  })
  numberManagement: number;
}

export class GoodPhotoGSinDto {
  @Type(() => Number)
  @IsNumber({}, { message: Message.NUMBER('$property') })
  @Max(9999999999, {
    message: 'El maximo valor de no_bien debe ser 9999999999',
  })
  @IsOptional()
  @ApiProperty({
    title: 'no_bien',
    example: 'Dato de tipo numérico',
    required: false,
  })
  goodNumber: number;

  @Type(() => Number)
  @IsNumber({}, { message: Message.NUMBER('$property') })
  @Max(9999999999, {
    message: 'El maximo valor de no_consec debe ser 9999999999',
  })
  @IsOptional()
  @ApiProperty({
    title: 'no_consec',
    example: 'Dato de tipo numérico',
    required: false,
  })
  consecNumber: number;

  @Type(() => Date)
  @IsDate({ message: Message.IsDate('$property') })
  @IsOptional()
  @ApiProperty({ title: 'fec_foto', example: 'Dato de tipo fecha' })
  datePhoto: Date;

  @Type(() => String)
  @IsString({ message: Message.STRING('$property') })
  @Length(1, 150, {
    message: Message.LENGTH('$property', '$constraint1 $constraint2'),
  })
  @IsOptional()
  @ApiProperty({
    title: 'ubicacion',
    example: 'Dato de tipo texto',
    required: false,
  })
  location: string;

  @Type(() => Date)
  @IsDate({ message: Message.IsDate('$property') })
  @IsOptional()
  @ApiProperty({ title: 'fec_foto_hc', example: 'Dato de tipo fecha' })
  datePhotoHc: Date;

  @Type(() => Number)
  @IsNumber({}, { message: Message.NUMBER('$property') })
  @Max(9999999999, {
    message: 'El maximo valor de existe_nsbdb debe ser 9999999999',
  })
  @IsOptional()
  @ApiProperty({
    title: 'existe_nsbdb',
    example: 'Dato de tipo numérico',
    required: false,
  })
  existsnsbdb: number;

  @Type(() => Number)
  @IsNumber({}, { message: Message.NUMBER('$property') })
  @Max(9999999999, {
    message: 'El maximo valor de no_gestion debe ser 9999999999',
  })
  @IsOptional()
  @ApiProperty({
    title: 'no_gestion',
    example: 'Dato de tipo numérico',
    required: false,
  })
  numberManagement: number;

  @Type(() => Number)
  @IsNumber({}, { message: Message.NUMBER('$property') })
  @Max(99999999999999999999999999999999, {
    message:
      'El maximo valor de id_aux debe ser 99999999999999999999999999999999',
  })
  @ApiProperty({
    title: 'id_aux',
    example: 'Dato de tipo numérico',
    required: false,
  })
  id: number;
}

