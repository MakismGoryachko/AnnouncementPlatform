import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Announcement } from './announcement.model';
import { Repository } from 'typeorm';
import { FilesService } from 'src/files/files.service';
import { createAnnouncementDto, updateAnnouncementDto } from './dto/create-announcment.dto';

@Injectable()
export class AnnouncementService {

    constructor(@InjectRepository(Announcement)
    private announcementRepository: Repository<Announcement>,
        private fileService: FilesService) { }

    async createAnnouncement(dto: createAnnouncementDto, image: string) {
        const fileName = await this.fileService.createFile(image)
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
        const device = await this.announcementRepository.save({ ...dto, image: fileName, publicationDate: `${dayString}.${monthString}.${yearString}` })
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

    async updateAnnouncement(dto: updateAnnouncementDto, image: string, id: number) {
        const fileName = await this.fileService.createFile(image)
        let announcement = await this.announcementRepository.findOne({ where: { id } })
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
        announcement.name = dto.name
        announcement.category = dto.category
        announcement.cost = dto.cost
        announcement.description = dto.description
        announcement.region = dto.region
        announcement.image = fileName
        announcement.publicationDate = `${dayString}.${monthString}.${yearString}`
        const updateAnnouncement = await this.announcementRepository.save(announcement)
        return updateAnnouncement
    }

    async deleteAnnouncement(id: number) {
        const res = await this.announcementRepository.delete(id)
        return 200
    }
}
