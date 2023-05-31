import { IsString, Length, IsEmail, IsNumber, IsNumberString, MinLength, MaxLength } from "class-validator";
import { ApiProperty, ApiQuery } from "@nestjs/swagger"

export class createfavouriteAnnouncementDto {
    @ApiProperty({ example: 'Iphone 12', description: 'Название объявления' })
    readonly name: string;

    @ApiProperty({ example: 'Какое-то описание', description: 'Описание объявления' })
    readonly description: string;

    @ApiProperty({ example: '150', description: 'Стоимость объявления' })
    readonly cost: number;

    @ApiProperty({ example: 'Фрунзенский', description: 'Район' })
    readonly userId: number;

    @ApiProperty({ example: 'Фрунзенский', description: 'Район' })
    readonly ownerId: number;

    @ApiProperty({ example: 'Фрунзенский', description: 'Район' })
    readonly region: string;

    @ApiProperty({ example: 'Телефоны', description: 'Категория' })
    readonly category: string;

    readonly image: string;

    readonly phoneNumber: string;
}
