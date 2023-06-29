import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';
import { Message } from 'src/shared/utils/message.decorator';

export class PupListPhotosTrackerDto {
    @Type(() => Number)
    @IsNumber({}, { message: Message.NUMBER('$property') })
    @ApiProperty({
        title: 'PC_NO_BIEN',
        example: 'Dato de tipo numerico',
        required: true,
    })
    pcNoGood: number;

    @Type(() => Number)
    @IsNumber({}, { message: Message.NUMBER('$property') })
    @ApiProperty({
        title: 'PC_NO_BIEN',
        example: 'Dato de tipo numerico',
        required: true,
    })
    lNuNoGood: number;
    
}
