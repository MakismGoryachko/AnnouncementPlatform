import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Region } from './region.model';
import { Repository } from 'typeorm';
import { createRegionDto } from './dto/create-region.dto';

@Injectable()
export class RegionService {
    constructor(@InjectRepository(Region)
        private regionRepository: Repository<Region>){}

        async createRegion(dto: createRegionDto){
            const region = await this.regionRepository.save(dto)
            return region
        }

}
