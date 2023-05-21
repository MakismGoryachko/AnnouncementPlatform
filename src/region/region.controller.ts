import { Body, Controller, Post } from '@nestjs/common';
import { RegionService } from './region.service';
import { createRegionDto } from './dto/create-region.dto';

@Controller('region')
export class RegionController {
    constructor(private regionService: RegionService){}

    @Post()
    createRegion(@Body() dto: createRegionDto){
        return this.regionService.createRegion(dto)
    }
}
