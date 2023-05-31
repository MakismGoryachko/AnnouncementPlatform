import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ActiveAnnouncement } from './activeAnnouncement.model';
import { Repository } from 'typeorm';
import { FilesService } from 'src/files/files.service';
import { createactiveAnnouncementDto } from './dto/create-activeAnnouncement';
import { User } from 'src/users/users.model';
@Injectable()
export class ActiveAnnouncementService {

    constructor(@InjectRepository(ActiveAnnouncement)
    private announcementRepository: Repository<ActiveAnnouncement>,
        private fileService: FilesService) { }

    async createAnnouncement(dto: createactiveAnnouncementDto) {
        let date = new Date()
        let month = date.getMonth() + 1
        let day = date.getDate()
        let year = date.getFullYear()
        if (month < 10) {
            var monthString: String = '0' + String(month)
        }
        else {
            var monthString: String = String(month)
        }
        let dayString: String = String(day)
        let yearString: String = String(year)
        const device = await this.announcementRepository.save({ ...dto, publicationDate: `${dayString}.${monthString}.${yearString}` })
        return device;
    }

    
    async getAllAnnouncement() {
        const allAnnouncement = await this.announcementRepository.find()
        return allAnnouncement;
    }

    async getOneAnnouncement(id: number) {
        const oneAnnouncement = await this.announcementRepository.findOne({ where: { id } })
        return oneAnnouncement;
    }

    async deleteAnnouncement(id: number) {
        const res = await this.announcementRepository.delete(id)
        return 200
    }
    
    async getUserAnnouncement(userId: number){
        const allAnnouncement = await this.announcementRepository.find({where: { userId } })
        return allAnnouncement;
    }
}
