import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';
import { Message } from 'src/shared/utils/message.decorator';

export class QueryVcatwebHistDto {
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
    @Type(() => String)
    @IsString({ message: Message.STRING('$property') })
    @ApiProperty({
        title: 'P_PATH_HIST',
        example: 'Dato de tipo texto',
        required: false,
    })
    pPathHist: string | null;
    @Type(() => String)
    @IsString({ message: Message.STRING('$property') })
    @ApiProperty({
        title: 'usuario_elimina',
        example: 'Dato de tipo texto',
        required: false,
    })
    user: string | null;
}
