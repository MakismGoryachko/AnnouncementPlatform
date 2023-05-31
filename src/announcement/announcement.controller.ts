import { Body, Controller, Delete, Get, Param, Post, UploadedFile, UseGuards, UseInterceptors, Res } from '@nestjs/common';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Announcement } from './announcement.model';
import { AnnouncementService } from './announcement.service';
import { createAnnouncementDto, updateAnnouncementDto } from './dto/create-announcment.dto';
import { GetUser } from 'src/decorator/getUser';
import { User } from 'src/users/users.model';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Объявления')
@Controller('announcement')
export class AnnouncementController {
    constructor(private announcementService: AnnouncementService) { }

    @ApiOperation({ summary: "Создание объявления" })
    @ApiResponse({ status: 200, type: Announcement })
    @UseGuards(JwtAuthGuard)
    @Post()
    @UseInterceptors (FileInterceptor ( 'image' ))
    createDevice(@Body() dto: createAnnouncementDto,
        @UploadedFile() files,
        @GetUser() user: User,) {
        return this.announcementService.createAnnouncement({...dto, userId: user.id}, files)
    }
    
    @ApiOperation({ summary: "Получение всех объявлений" })
    @ApiResponse({ status: 200, type: Announcement })
    @Get('/getAll')
    getlAllAnnouncement() {
        return this.announcementService.getAllAnnouncement()
    }
    
    @Post('/update/:id')
    @UseInterceptors(FileInterceptor('image'))
    updateAnnouncement(@Body() dto: updateAnnouncementDto,
        @UploadedFile() image, @Param('id') id: number) {
        return this.announcementService.updateAnnouncement(dto, image, id)
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
    getUserAnnouncement( @GetUser() user: User){
        console.log(user)
        return this.announcementService.getUserAnnouncement(user.id)
    }
}

