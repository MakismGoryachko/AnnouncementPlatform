import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './category.model';
import { Repository } from 'typeorm';
import { createCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryService {
        constructor(@InjectRepository(Category)
        private categoryRepository: Repository<Category>){}

        async createCategory(dto: createCategoryDto){
            const category = await this.categoryRepository.save(dto)
            return category
        }

}
