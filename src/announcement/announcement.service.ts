import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Announcement } from './announcement.model';
import { Repository } from 'typeorm';
import { FilesService } from 'src/files/files.service';
import { createAnnouncementDto } from './dto/create-announcment.dto';

@Injectable()
export class AnnouncementService {

    constructor(@InjectRepository(Announcement)
     private announcementRepository: Repository<Announcement>,
     private fileService: FilesService){ }

     async createAnnouncement(dto: createAnnouncementDto, image: string){
        // newnew
     }
}
