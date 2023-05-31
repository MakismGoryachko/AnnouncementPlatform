import { Body, Controller, Delete, Get, Param, Post, UploadedFile, UseGuards, UseInterceptors, Res } from '@nestjs/common';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FavouriteAnnouncement } from './favouriteAnnouncement.model';
import { FavouriteAnnouncementService } from './favouriteAnnouncement.service';
import { createfavouriteAnnouncementDto } from './dto/create-favouriteAnnouncement';
import { GetUser } from 'src/decorator/getUser';
import { User } from 'src/users/users.model';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('Объявления')
@Controller('favouriteannouncement')
export class FavouriteAnnouncementController {
    constructor(private announcementService: FavouriteAnnouncementService) { }

    @ApiOperation({ summary: "Создание объявления" })
    @ApiResponse({ status: 200, type: FavouriteAnnouncement })
    @UseGuards(JwtAuthGuard)
    @Post()
    @UseInterceptors(FileInterceptor('image'))
    createDevice(@Body() dto: createfavouriteAnnouncementDto,
        @GetUser() user: User) {
        return this.announcementService.createAnnouncement({...dto, ownerId: user.id})
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
}

