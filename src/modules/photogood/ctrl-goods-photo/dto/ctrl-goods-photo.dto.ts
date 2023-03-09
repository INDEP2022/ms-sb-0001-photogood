
import { ApiProperty } from '@nestjs/swagger';
    import { Message } from 'sigebi-lib-common';
    import { IsOptional, IsNumber, Max, IsString, Length, IsDate,  } from 'class-validator';
    import { Type } from 'class-transformer';
    
    export class CtrlGoodsPhotoDto {
             
        @Type(() => String)
        @IsString({ message: Message.STRING("$property") })
        @Length(1, 80, { message: Message.LENGTH("$property", "$constraint1 $constraint2")})
        @IsOptional()
        @ApiProperty({ title: "carpeta_gral", example: "Dato de tipo texto", required: false })
        filegral: string;
        
        @Type(() => String)
        @IsString({ message: Message.STRING("$property") })
        @Length(1, 80, { message: Message.LENGTH("$property", "$constraint1 $constraint2")})
        @IsOptional()
        @ApiProperty({ title: "carpeta_proceso", example: "Dato de tipo texto", required: false })
        fileProcess: string;
        
        @Type(() => Number)
        @IsNumber({}, { message: Message.NUMBER("$property") })
        @Max(9999999999, { message: "El maximo valor de estatus debe ser 9999999999" })
        @IsOptional()
        @ApiProperty({ title: "estatus", example: "Dato de tipo numérico", required: false })
        status: number;
        
      @Type(() => Date)
        @IsDate({ message: Message.IsDate('$property') })
        @IsOptional()
        @ApiProperty({ title: 'fecha_proceso', example: 'Dato de tipo fecha' })
        dateProcess: Date;
        
        @Type(() => Number)
        @IsNumber({}, { message: Message.NUMBER("$property") })
        @Max(9999999999999999, { message: "El maximo valor de estatus_ktl debe ser 9999999999999999" })
        @IsOptional()
        @ApiProperty({ title: "estatus_ktl", example: "Dato de tipo numérico", required: false })
        statusktl: number;
        
    }

    export class CtrlGoodsPhotoSinDto {
      
      @Type(() => Number)
      @IsNumber({}, { message: Message.NUMBER("$property") })
      @Max(99999, { message: "El maximo valor de id_control debe ser 99999" })
      @IsOptional()
      @ApiProperty({ title: "id_control", example: "Dato de tipo numérico", required: false })
      id: number;
      
      @Type(() => String)
      @IsString({ message: Message.STRING("$property") })
      @Length(1, 80, { message: Message.LENGTH("$property", "$constraint1 $constraint2")})
      @IsOptional()
      @ApiProperty({ title: "carpeta_gral", example: "Dato de tipo texto", required: false })
      filegral: string;
      
      @Type(() => String)
      @IsString({ message: Message.STRING("$property") })
      @Length(1, 80, { message: Message.LENGTH("$property", "$constraint1 $constraint2")})
      @IsOptional()
      @ApiProperty({ title: "carpeta_proceso", example: "Dato de tipo texto", required: false })
      fileProcess: string;
      
      @Type(() => Number)
      @IsNumber({}, { message: Message.NUMBER("$property") })
      @Max(9999999999, { message: "El maximo valor de estatus debe ser 9999999999" })
      @IsOptional()
      @ApiProperty({ title: "estatus", example: "Dato de tipo numérico", required: false })
      status: number;
      
    @Type(() => Date)
      @IsDate({ message: Message.IsDate('$property') })
      @IsOptional()
      @ApiProperty({ title: 'fecha_proceso', example: 'Dato de tipo fecha' })
      dateProcess: Date;
      
      @Type(() => Number)
      @IsNumber({}, { message: Message.NUMBER("$property") })
      @Max(9999999999999999, { message: "El maximo valor de estatus_ktl debe ser 9999999999999999" })
      @IsOptional()
      @ApiProperty({ title: "estatus_ktl", example: "Dato de tipo numérico", required: false })
      statusktl: number;
      
  }
    
    