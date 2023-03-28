import { IsString, Length, IsEmail } from "class-validator";
import { ApiProperty } from "@nestjs/swagger"

export class createAnnouncementDto {
    @ApiProperty({ example: 'Iphone 12', description: 'Название объявления' })
    @IsString({ message: 'Должно быть строкой' })

    readonly name: string;
}