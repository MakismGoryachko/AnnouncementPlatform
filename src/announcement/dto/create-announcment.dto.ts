import { IsString, Length, IsEmail, IsNumber, IsNumberString, MinLength, MaxLength } from "class-validator";
import { ApiProperty, ApiQuery } from "@nestjs/swagger"

export class createAnnouncementDto {
    @ApiProperty({ example: 'Iphone 12', description: 'Название объявления' })
    readonly name: string;

    @ApiProperty({ example: 'Какое-то описание', description: 'Описание объявления' })
    readonly description: string;

    @ApiProperty({ example: '150', description: 'Стоимость объявления' })
    readonly cost: number;

    @ApiProperty({ example: 'Фрунзенский', description: 'Район' })
    readonly userId: number;

    @ApiProperty({ example: 'Фрунзенский', description: 'Район' })
    readonly region: string;

    @ApiProperty({ example: 'Телефоны', description: 'Категория' })
    readonly category: string;
}

export class updateAnnouncementDto {
    @ApiProperty({ example: 'Iphone 12', description: 'Название объявления' })
    readonly name: string;

    @ApiProperty({ example: 'Какое-то описание', description: 'Описание объявления' })
    readonly description: string;

    @ApiProperty({ example: '150', description: 'Стоимость объявления' })
    readonly cost: number;

    @ApiProperty({ example: 'Фрунзенский', description: 'Район' })
    readonly userId: number;

    @ApiProperty({ example: 'Фрунзенский', description: 'Район' })
    readonly region: string;

    @ApiProperty({ example: 'Телефоны', description: 'Категория' })
    readonly category: string;

    @ApiProperty({ example: 'Телефоны', description: 'Категория' })
    readonly publicationDate: string;

    @ApiProperty({ example: 'Телефоны', description: 'Категория' })
    readonly image: string;

}