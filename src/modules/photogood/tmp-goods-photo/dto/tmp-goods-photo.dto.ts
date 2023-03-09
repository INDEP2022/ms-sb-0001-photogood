import { ApiProperty } from '@nestjs/swagger';
import { Message } from 'sigebi-lib-common';
import {
  IsOptional,
  IsNumber,
  Max,
  IsString,
  Length,
  IsDate,
} from 'class-validator';
import { Type } from 'class-transformer';

export class TmpGoodsPhotoDto {
  @Type(() => Number)
  @IsNumber({}, { message: Message.NUMBER('$property') })
  @Max(99999, { message: 'El maximo valor de id_control debe ser 99999' })
  @ApiProperty({
    title: 'id_control',
    example: 'Dato de tipo numérico',
    required: false,
  })
  controlId: number;

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
    message: 'El maximo valor de id_bien debe ser 9999999999',
  })
  @IsOptional()
  @ApiProperty({
    title: 'id_bien',
    example: 'Dato de tipo numérico',
    required: false,
  })
  goodId: number;

  @Type(() => Number)
  @IsNumber({}, { message: Message.NUMBER('$property') })
  @Max(9999, { message: 'El maximo valor de no_consec debe ser 9999' })
  @IsOptional()
  @ApiProperty({
    title: 'no_consec',
    example: 'Dato de tipo numérico',
    required: false,
  })
  consecNumber: number;

  @Type(() => String)
  @IsString({ message: Message.STRING('$property') })
  @Length(1, 200, {
    message: Message.LENGTH('$property', '$constraint1 $constraint2'),
  })
  @IsOptional()
  @ApiProperty({
    title: 'path_ubicacion',
    example: 'Dato de tipo texto',
    required: false,
  })
  pathLocation: string;

  @Type(() => String)
  @IsString({ message: Message.STRING('$property') })
  @Length(1, 80, {
    message: Message.LENGTH('$property', '$constraint1 $constraint2'),
  })
  @IsOptional()
  @ApiProperty({
    title: 'carpeta_gral',
    example: 'Dato de tipo texto',
    required: false,
  })
  filegral: string;

  @Type(() => String)
  @IsString({ message: Message.STRING('$property') })
  @Length(1, 80, {
    message: Message.LENGTH('$property', '$constraint1 $constraint2'),
  })
  @IsOptional()
  @ApiProperty({
    title: 'carpeta_bien',
    example: 'Dato de tipo texto',
    required: false,
  })
  fileGood: string;

  @Type(() => Date)
  @IsDate({ message: Message.IsDate('$property') })
  @IsOptional()
  @ApiProperty({ title: 'fecha_migracion', example: 'Dato de tipo fecha' })
  dateMigration: Date;

  @Type(() => Number)
  @IsNumber({}, { message: Message.NUMBER('$property') })
  @Max(9999999999, {
    message: 'El maximo valor de estatus_migra debe ser 9999999999',
  })
  @IsOptional()
  @ApiProperty({
    title: 'estatus_migra',
    example: 'Dato de tipo numérico',
    required: false,
  })
  statusmigrate: number;

  @Type(() => String)
  @IsString({ message: Message.STRING('$property') })
  @Length(1, 30, {
    message: Message.LENGTH('$property', '$constraint1 $constraint2'),
  })
  @IsOptional()
  @ApiProperty({
    title: 'origen',
    example: 'Dato de tipo texto',
    required: false,
  })
  origin: string;

  @Type(() => Number)
  @IsNumber({}, { message: Message.NUMBER('$property') })
  @Max(999999999999999, {
    message: 'El maximo valor de size_fs debe ser 999999999999999',
  })
  @IsOptional()
  @ApiProperty({
    title: 'size_fs',
    example: 'Dato de tipo numérico',
    required: false,
  })
  sizefs: number;

}

export class TmpGoodsPhotoSinDto {
  @Type(() => Number)
  @IsNumber({}, { message: Message.NUMBER('$property') })
  @Max(99999, { message: 'El maximo valor de id_control debe ser 99999' })
  @ApiProperty({
    title: 'id_control',
    example: 'Dato de tipo numérico',
    required: false,
  })
  controlId: number;

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
    message: 'El maximo valor de id_bien debe ser 9999999999',
  })
  @IsOptional()
  @ApiProperty({
    title: 'id_bien',
    example: 'Dato de tipo numérico',
    required: false,
  })
  goodId: number;

  @Type(() => Number)
  @IsNumber({}, { message: Message.NUMBER('$property') })
  @Max(9999, { message: 'El maximo valor de no_consec debe ser 9999' })
  @IsOptional()
  @ApiProperty({
    title: 'no_consec',
    example: 'Dato de tipo numérico',
    required: false,
  })
  consecNumber: number;

  @Type(() => String)
  @IsString({ message: Message.STRING('$property') })
  @Length(1, 200, {
    message: Message.LENGTH('$property', '$constraint1 $constraint2'),
  })
  @IsOptional()
  @ApiProperty({
    title: 'path_ubicacion',
    example: 'Dato de tipo texto',
    required: false,
  })
  pathLocation: string;

  @Type(() => String)
  @IsString({ message: Message.STRING('$property') })
  @Length(1, 80, {
    message: Message.LENGTH('$property', '$constraint1 $constraint2'),
  })
  @IsOptional()
  @ApiProperty({
    title: 'carpeta_gral',
    example: 'Dato de tipo texto',
    required: false,
  })
  filegral: string;

  @Type(() => String)
  @IsString({ message: Message.STRING('$property') })
  @Length(1, 80, {
    message: Message.LENGTH('$property', '$constraint1 $constraint2'),
  })
  @IsOptional()
  @ApiProperty({
    title: 'carpeta_bien',
    example: 'Dato de tipo texto',
    required: false,
  })
  fileGood: string;

  @Type(() => Date)
  @IsDate({ message: Message.IsDate('$property') })
  @IsOptional()
  @ApiProperty({ title: 'fecha_migracion', example: 'Dato de tipo fecha' })
  dateMigration: Date;

  @Type(() => Number)
  @IsNumber({}, { message: Message.NUMBER('$property') })
  @Max(9999999999, {
    message: 'El maximo valor de estatus_migra debe ser 9999999999',
  })
  @IsOptional()
  @ApiProperty({
    title: 'estatus_migra',
    example: 'Dato de tipo numérico',
    required: false,
  })
  statusmigrate: number;

  @Type(() => String)
  @IsString({ message: Message.STRING('$property') })
  @Length(1, 30, {
    message: Message.LENGTH('$property', '$constraint1 $constraint2'),
  })
  @IsOptional()
  @ApiProperty({
    title: 'origen',
    example: 'Dato de tipo texto',
    required: false,
  })
  origin: string;

  @Type(() => Number)
  @IsNumber({}, { message: Message.NUMBER('$property') })
  @Max(999999999999999, {
    message: 'El maximo valor de size_fs debe ser 999999999999999',
  })
  @IsOptional()
  @ApiProperty({
    title: 'size_fs',
    example: 'Dato de tipo numérico',
    required: false,
  })
  sizefs: number;

  @Type(() => Number)
  @IsNumber({}, { message: Message.NUMBER('$property') })
  @Max(99999999999999999999999999999999, {
    message: 'El maximo valor de id debe ser 99999999999999999999999999999999',
  })
  @ApiProperty({
    title: 'id',
    example: 'Dato de tipo numérico',
    required: false,
  })
  id: number;
}
