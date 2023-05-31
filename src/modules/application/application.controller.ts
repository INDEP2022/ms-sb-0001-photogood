import { Body, Controller, Get, Post, Param } from '@nestjs/common';
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

    @ApiOperation({ summary: 'PUP_EXPORTA_FOTOS_BIEN' })
    @ApiBody({ type: '' })
    @Get('pup-export-photos-good')
    async pupExportPhotosGood() {
        return this.service.pupExportPhotosGood();
    }

    @ApiOperation({ summary: 'PUP_EXPORTA_FOTOS_MASIV' })
    @ApiBody({ type: '' })
    @Get('pup-export-photos-masiv/:id')
    async pupExportPhotosMasiv(@Param('id') id: number) {
        return this.service.pupExportPhotosMasiv(id);
    }

    @ApiOperation({ summary: 'PUP_INS_LISTA_FOTOS' })
    @ApiBody({ type: '' })
    @Get('pup-ins-list-photos')
    async pupInsListPhoto() {
        return this.service.pupInsListPhoto();
    }

    @ApiOperation({ summary: 'PUP_OBTIENE_FOTOS' })
    @ApiBody({ type: '' })
    @Get('pup-gets-photos')
    async pupGetsPhotos() {
        return this.service.pupGetsPhotos();
    }
}
