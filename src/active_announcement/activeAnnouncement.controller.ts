import { Body, Controller, Delete, Get, Param, Post, UploadedFile, UseGuards, UseInterceptors, Res } from '@nestjs/common';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ActiveAnnouncement } from './activeAnnouncement.model';
import { ActiveAnnouncementService } from './activeAnnouncement.service';
import { createactiveAnnouncementDto } from './dto/create-activeAnnouncement';
import { GetUser } from 'src/decorator/getUser';
import { User } from 'src/users/users.model';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AnnouncementService } from 'src/announcement/announcement.service';

@ApiTags('Объявления')
@Controller('activeannouncement')
export class ActiveAnnouncementController {
    constructor(private announcementService: ActiveAnnouncementService,
        private announcementServic: AnnouncementService) { }

    @ApiOperation({ summary: "Создание объявления" })
    @ApiResponse({ status: 200, type: ActiveAnnouncement })
    @UseGuards(JwtAuthGuard)
    @Post()
    @UseInterceptors(FileInterceptor('image'))
    createDevice(@Body() dto: createactiveAnnouncementDto) {
        return this.announcementService.createAnnouncement(dto)
    }
    
    @ApiOperation({ summary: "Получение всех объявлений" })
    @ApiResponse({ status: 200, type: ActiveAnnouncement })
    @Get('/getAll')
    getlAllAnnouncement() {
        return this.announcementService.getAllAnnouncement()
    }
    
    @UseGuards(JwtAuthGuard)
    @Post('/update/:id')
    @UseInterceptors(FileInterceptor('image'))
    updateAnnouncement(@Body() dto: createactiveAnnouncementDto,
        @UploadedFile() files,
        @GetUser() user: User,
        @Param('id') id: number) {
        console.log(user)
        this.announcementService.deleteAnnouncement(id)
        return this.announcementServic.createAnnouncement({ ...dto, userId: user.id }, files)
    }

    @Delete('/delete/:id')
    deleteAnnouncement(@Param('id') id: number) {
        return this.announcementService.deleteAnnouncement(id)
    }

    @Get('/getone/:id')
    getOneAnnouncement(@Param('id') id: number) {
        return this.announcementService.getOneAnnouncement(id)
    }

    @UseGuards(JwtAuthGuard)
    @Get('/userAnnouncement')
    getUserAnnouncement(@GetUser() user: User) {
        return this.announcementService.getUserAnnouncement(user.id)
    }
    
    @Get('/allUserAnnouncement/:userId')
    getAllUserAnnouncement(@Param('userId') userId: number) {
        return this.announcementService.getUserAnnouncement(userId)
    }
}

