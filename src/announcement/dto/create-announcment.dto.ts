import { IsString, Length, IsEmail, IsNumber, IsNumberString, MinLength, MaxLength } from "class-validator";
import { ApiProperty, ApiQuery } from "@nestjs/swagger"

export class createAnnouncementDto {
    @ApiProperty({ example: 'Iphone 12', description: 'Название объявления' })
    @IsString({ message: 'Должно быть строкой' })
    readonly name: string;

    @ApiProperty({ example: 'Какое-то описание', description: 'Описание объявления' })
    @IsString({ message: 'Должно быть строкой' })
    @Length(1, 250, { message: 'Описание должно содержать более 1 символа и менее 250' })
    readonly description: string;

    @ApiProperty({ example: '150', description: 'Стоимость объявления' })
    @IsNumber()
    @MinLength(1)
    @MaxLength(10)
    readonly price: number;

    @ApiProperty({ example: 'Фрунзенский', description: 'Район' })
    @IsString({ message: 'Должно быть строкой' })
    readonly area: string;


}