import { ApiProperty } from '@nestjs/swagger';
import { Message } from 'sigebi-lib-common';
import { IsOptional, IsString, Length, IsNumber, Max } from 'class-validator';
import { Type } from 'class-transformer';

export class ContainerPhotossiabDto {
  @Type(() => String)
  @IsString({ message: Message.STRING('$property') })
  @Length(1, 100, {
    message: Message.LENGTH('$property', '$constraint1 $constraint2'),
  })
  @IsOptional()
  @ApiProperty({
    title: 'ubicacion',
    example: 'Dato de tipo texto',
    required: false,
  })
  location: string;

}

export class ContainerPhotossiabSinDto {
  @Type(() => String)
  @IsString({ message: Message.STRING('$property') })
  @Length(1, 100, {
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
  @Max(9999999999, { message: 'El maximo valor de id debe ser 9999999999' })
  @ApiProperty({
    title: 'id',
    example: 'Dato de tipo numérico',
    required: false,
  })
  id: number;
}
