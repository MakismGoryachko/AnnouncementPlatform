import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Announcement } from './announcement.model';
import { AnnouncementService } from './announcement.service';
import { createAnnouncementDto } from './dto/create-announcment.dto';

@ApiTags('Объявления')
@Controller('announcement')
export class AnnouncementController {
    constructor(private announcementService: AnnouncementService){}

    @ApiOperation({summary: "Создание объявления"})
    @ApiResponse({status: 200, type: Announcement})
    @Post()
    @UseInterceptors(FileInterceptor('image'))
    createDevice(@Body() dto: createAnnouncementDto,
                 @UploadedFile() image) {
        return this.announcementService.createAnnouncement(dto, image)
    }
    }

