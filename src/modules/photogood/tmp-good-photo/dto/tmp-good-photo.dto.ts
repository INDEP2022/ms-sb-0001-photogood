import { ApiProperty } from '@nestjs/swagger';
import { Message } from 'sigebi-lib-common';
import { IsOptional, IsNumber, Max, IsString, Length } from 'class-validator';
import { Type } from 'class-transformer';

export class TmpGoodPhotoDto {
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

  @Type(() => String)
  @IsString({ message: Message.STRING('$property') })
  @Length(1, 2, {
    message: Message.LENGTH('$property', '$constraint1 $constraint2'),
  })
  @IsOptional()
  @ApiProperty({
    title: 'foto',
    example: 'Dato de tipo texto',
    required: false,
  })
  photo: string;
}

export class TmpGoodPhotoSinDto {
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

  @Type(() => String)
  @IsString({ message: Message.STRING('$property') })
  @Length(1, 2, {
    message: Message.LENGTH('$property', '$constraint1 $constraint2'),
  })
  @IsOptional()
  @ApiProperty({
    title: 'foto',
    example: 'Dato de tipo texto',
    required: false,
  })
  photo: string;
}
