import { ApiProperty } from '@nestjs/swagger';
import { Message } from 'src/shared/utils/message.decorator';
import { IsOptional, IsString, Length } from 'class-validator';
import { Type } from 'class-transformer';

export class PhotoGoodDto {
  @Type(() => String)
  @IsString({ message: Message.STRING('$property') })
  @Length(1, 100, {
    message: Message.LENGTH('$property', '$constraint1 $constraint2'),
  })
  @ApiProperty({
    title: 'carpeta',
    example: 'Dato de tipo texto',
    required: false,
  })
  file: string;

  @Type(() => String)
  @IsString({ message: Message.STRING('$property') })
  @Length(1, 150, {
    message: Message.LENGTH('$property', '$constraint1 $constraint2'),
  })
  @ApiProperty({
    title: 'ubicacion',
    example: 'Dato de tipo texto',
    required: false,
  })
  location: string;
}

export class PhotoGoodFieldsDTO {
  @Type(() => String)
  @IsString({ message: Message.STRING('$property') })
  @Length(1, 100, {
    message: Message.LENGTH('$property', '$constraint1 $constraint2'),
  })
  @ApiProperty({
    title: 'carpeta',
    example: 'Dato de tipo texto',
    required: false,
  })
  file: string;

  @Type(() => String)
  @IsString({ message: Message.STRING('$property') })
  @Length(1, 150, {
    message: Message.LENGTH('$property', '$constraint1 $constraint2'),
  })
  @ApiProperty({
    title: 'ubicacion',
    example: 'Dato de tipo texto',
    required: false,
  })
  location: string;
}
