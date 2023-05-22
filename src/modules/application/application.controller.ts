import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApplicationService } from './application.service';
import { QueryStatusPhotoCatWebDto, QueryVcatwebDto } from './dto/query-fimgfotbieadd.dto';

@ApiCreatedResponse()
@ApiTags('aplicación')
@Controller('application')
export class ApplicationController {
    constructor(private service: ApplicationService) { }
    //---------------------------------------------------------------------------------------------
    @ApiOperation({ summary: 'FIMGFOTBIEADD V_CAT_WEB' })
    @ApiBody({ type: QueryVcatwebDto })
    @Post('queryVcatweb')
    async queryVcatweb(@Body() dto: QueryVcatwebDto) {
        return this.service.queryVcatweb(dto);
    }
    //---------------------------------------------------------------------------------------------
    @ApiOperation({ summary: 'FIMGFOTBIEADD ESTATUS_FOTO_CAT_WEB' })
    @ApiBody({ type: QueryVcatwebDto })
    @Post('queryStatusPhotoCatWeb')
    async queryStatusPhotoCatWeb(@Body() dto: QueryStatusPhotoCatWebDto) {
        return this.service.queryStatusPhotoCatWeb(dto);
    }
    //---------------------------------------------------------------------------------------------
    @ApiOperation({ summary: 'FIMGFOTBIEADD V_BIENES_FOTO_PATH' })
    @ApiBody({ type: QueryVcatwebDto })
    @Get('queryVgoodsPhotoPath')
    async queryVgoodsPhotoPath() {
        return this.service.queryVgoodsPhotoPath();
    }
}
