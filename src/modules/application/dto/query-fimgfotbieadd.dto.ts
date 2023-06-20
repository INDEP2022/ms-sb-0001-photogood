import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';
import { Message } from 'src/shared/utils/message.decorator';

export class QueryVcatwebDto {
    @Type(() => Number)
    @IsNumber({}, { message: Message.NUMBER('$property') })
    @ApiProperty({
        title: 'P_NO_BIEN',
        example: 'Dato de tipo numerico',
        required: false,
    })
    pGoodNumber: number | null;
    @Type(() => String)
    @IsString({ message: Message.STRING('$property') })
    @ApiProperty({
        title: 'P_PATH_BIEFOT',
        example: 'Dato de tipo texto',
        required: false,
    })
    pPathBiefot: string | null;
}

export class QueryStatusPhotoCatWebDto {
    @Type(() => Number)
    @IsNumber({}, { message: Message.NUMBER('$property') })
    @ApiProperty({
        title: 'NO_BIEN',
        example: 'Dato de tipo numerico',
        required: false,
    })
    goodNumber: number | null;
    @Type(() => String)
    @IsString({ message: Message.STRING('$property') })
    @ApiProperty({
        title: 'LST_ARCHIVO_IMG',
        example: 'Dato de tipo texto',
        required: false,
    })
    lstFileImg: string | null;
}