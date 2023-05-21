import { Body, Controller, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { createCategoryDto } from './dto/create-category.dto';

@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService){}

    @Post()
    createCategory(@Body() dto: createCategoryDto){
        return this.categoryService.createCategory(dto)
    }
}
