import { Body, Controller, Post } from '@nestjs/common';
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
    create(@Body() announcementDto: createAnnouncementDto){
        //return this.announcementService.createUser(announcementDto)
    }
}
