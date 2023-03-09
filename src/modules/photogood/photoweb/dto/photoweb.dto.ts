import { ApiProperty } from '@nestjs/swagger';
import { Message } from 'sigebi-lib-common';
import { IsOptional, IsString, Length, IsNumber, Max } from 'class-validator';
import { Type } from 'class-transformer';

export class PhotowebDto {
  @Type(() => String)
  @IsString({ message: Message.STRING('$property') })
  @Length(1, 255, {
    message: Message.LENGTH('$property', '$constraint1 $constraint2'),
  })
  @ApiProperty({
    title: 'id_inmueble',
    example: 'Dato de tipo texto',
    required: false,
  })
  propertyId: string;

  @Type(() => Number)
  @IsNumber({}, { message: Message.NUMBER('$property') })
  @Max(999999999999999, {
    message: 'El maximo valor de id_foto debe ser 999999999999999',
  })
  @ApiProperty({
    title: 'id_foto',
    example: 'Dato de tipo numérico',
    required: false,
  })
  photoId: number;

  @Type(() => String)
  @IsString({ message: Message.STRING('$property') })
  @Length(1, 255, {
    message: Message.LENGTH('$property', '$constraint1 $constraint2'),
  })
  @IsOptional()
  @ApiProperty({
    title: 'detalle_foto',
    example: 'Dato de tipo texto',
    required: false,
  })
  detailPhoto: string;

  @Type(() => String)
  @IsString({ message: Message.STRING('$property') })
  @Length(1, 255, {
    message: Message.LENGTH('$property', '$constraint1 $constraint2'),
  })
  @IsOptional()
  @ApiProperty({
    title: 'foto',
    example: 'Dato de tipo texto',
    required: false,
  })
  photo: string;

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
}

export class PhotowebFieldsDTO {
  @Type(() => String)
  @IsString({ message: Message.STRING('$property') })
  @Length(1, 255, {
    message: Message.LENGTH('$property', '$constraint1 $constraint2'),
  })
  @ApiProperty({
    title: 'id_inmueble',
    example: 'Dato de tipo texto',
    required: false,
  })
  propertyId: string;
  @Type(() => Number)
  @IsNumber({}, { message: Message.NUMBER('$property') })
  @Max(999999999999999, {
    message: 'El maximo valor de id_foto debe ser 999999999999999',
  })
  @ApiProperty({
    title: 'id_foto',
    example: 'Dato de tipo numérico',
    required: false,
  })
  photoId: number;
}
