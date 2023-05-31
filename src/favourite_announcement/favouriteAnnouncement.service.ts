import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FavouriteAnnouncement } from './favouriteAnnouncement.model';
import { Repository } from 'typeorm';
import { FilesService } from 'src/files/files.service';
import { createfavouriteAnnouncementDto } from './dto/create-favouriteAnnouncement';
@Injectable()
export class FavouriteAnnouncementService {

    constructor(@InjectRepository(FavouriteAnnouncement)
    private announcementRepository: Repository<FavouriteAnnouncement>) { }

    async createAnnouncement(dto: createfavouriteAnnouncementDto) {
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
    
    async getUserAnnouncement(ownerId: number){
        const allAnnouncement = await this.announcementRepository.find({where: { ownerId } })
        return allAnnouncement;
    }
}
