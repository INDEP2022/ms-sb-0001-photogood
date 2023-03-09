import { ApiProperty } from '@nestjs/swagger';
    import { Message } from 'sigebi-lib-common';
    import { IsOptional, IsNumber, Max,  } from 'class-validator';
    import { Type } from 'class-transformer';
    
    export class MediumGoodPhotographyDto {
           
        @Type(() => Number)
        @IsNumber({}, { message: Message.NUMBER("$property") })
        @Max(99, { message: "El maximo valor de id_medio debe ser 99" })
        @IsOptional()
        @ApiProperty({ title: "id_medio", example: "Dato de tipo numérico", required: false })
        halfId: number;
        
        @Type(() => Number)
        @IsNumber({}, { message: Message.NUMBER("$property") })
        @Max(99999, { message: "El maximo valor de num_fotos debe ser 99999" })
        @IsOptional()
        @ApiProperty({ title: "num_fotos", example: "Dato de tipo numérico", required: false })
        photosNumber: number;
    }

    export class MediumGoodPhotographySinDto {
           
        @Type(() => Number)
        @IsNumber({}, { message: Message.NUMBER("$property") })
        @Max(99, { message: "El maximo valor de id_medio debe ser 99" })
        @IsOptional()
        @ApiProperty({ title: "id_medio", example: "Dato de tipo numérico", required: false })
        halfId: number;
        
        @Type(() => Number)
        @IsNumber({}, { message: Message.NUMBER("$property") })
        @Max(99999, { message: "El maximo valor de num_fotos debe ser 99999" })
        @IsOptional()
        @ApiProperty({ title: "num_fotos", example: "Dato de tipo numérico", required: false })
        photosNumber: number;
        
        @Type(() => Number)
        @IsNumber({}, { message: Message.NUMBER("$property") })
        @Max(9999999999, { message: "El maximo valor de no_bien debe ser 9999999999" })
        @ApiProperty({ title: "no_bien", example: "Dato de tipo numérico", required: false })
        id: number;
    }  