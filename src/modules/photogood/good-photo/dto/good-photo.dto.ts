import { ApiProperty } from '@nestjs/swagger';
import { Message } from 'sigebi-lib-common';
import { IsOptional, IsNumber, Max, IsString, Length } from 'class-validator';
import { Type } from 'class-transformer';

export class GoodPhotoDto {
  @Type(() => Number)
  @IsNumber({}, { message: Message.NUMBER('$property') })
  @Max(9999999999, {
    message: 'El maximo valor de no_bien debe ser 9999999999',
  })
  @IsOptional()
  @ApiProperty({
    title: 'no_bien',
    example: 'Dato de tipo numérico',
    required: true,
  })
  goodNumber: number;

  @Type(() => Number)
  @IsNumber({}, { message: Message.NUMBER('$property') })
  @Max(9999999999, {
    message: 'El maximo valor de no_consec debe ser 9999999999999999',
  })
  @IsOptional()
  @ApiProperty({
    title: 'no_consec',
    example: 'Dato de tipo numérico',
    required: true,
  })
  consecNumber: number;

  @Type(() => Number)
  @IsNumber({}, { message: Message.NUMBER('$property') })
  @Max(9999999999, {
    message: 'El maximo valor de no_registro debe ser 9999999999999999',
  })
  @IsOptional()
  @ApiProperty({
    title: 'no_registro',
    example: 'Dato de tipo numérico',
    required: false,
  })
  recordNumber: number;

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

  @Type(() => Number)
  @IsNumber({}, { message: Message.NUMBER('$property') })
  @Max(9999999999999999, {
    message: 'El maximo valor de publ_img_cat_web debe ser 9999999999999999',
  })
  @IsOptional()
  @ApiProperty({
    title: 'publ_img_cat_web',
    example: 'Dato de tipo numérico',
    required: false,
  })
  publicImgcatWeb: number;

  @Type(() => Number)
  @IsNumber({}, { message: Message.NUMBER('$property') })
  @Max(9999999999999999, {
    message: 'El maximo valor de existe_fs debe ser 9999999999999999',
  })
  @IsOptional()
  @ApiProperty({
    title: 'existe_fs',
    example: 'Dato de tipo numérico',
    required: false,
  })
  existsfs: number;

  @Type(() => Number)
  @IsNumber({}, { message: Message.NUMBER('$property') })
  @Max(9999999999999999, {
    message: 'El maximo valor de existe_prod debe ser 9999999999999999',
  })
  @IsOptional()
  @ApiProperty({
    title: 'existe_prod',
    example: 'Dato de tipo numérico',
    required: false,
  })
  existsproduction: number;
}

export class GoodPhotoFieldsDTO {
  @Type(() => Number)
  @IsNumber({}, { message: Message.NUMBER('$property') })
  @Max(9999999999, {
    message: 'El maximo valor de no_consec debe ser 9999999999',
  })
  @ApiProperty({
    title: 'no_consec',
    example: 'Dato de tipo numérico',
    required: true,
  })
  consecNumber: number;

  @Type(() => Number)
  @IsNumber({}, { message: Message.NUMBER('$property') })
  @Max(9999999999, {
    message: 'El maximo valor de no_consec debe ser 9999999999',
  })
  @ApiProperty({
    title: 'no_bien',
    example: 'Dato de tipo numérico',
    required: true,
  })
  goodNumber: number;
}
