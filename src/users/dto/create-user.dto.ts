import { IsString, Length, IsEmail } from "class-validator";
import { ApiProperty } from "@nestjs/swagger"

export class createUserDto {
    @ApiProperty({ example: 'user@mail.com', description: 'Почтовый адрес' })
    @IsString({ message: 'Должно быть строкой' })
    @IsEmail({}, { message: 'Неккоректный email' })
    readonly email: string;

    @ApiProperty({ example: 'Максим', description: 'Имя' })
    @IsString({ message: 'Должно быть строкой' })
    readonly name: string;

    @ApiProperty({ example: '12345678', description: 'Пароль' })
    @IsString({ message: 'Должно быть строкой' })
    @Length(4, 16, { message: "Пароль должен содержать не менее 4 символов и не более 16" })
    readonly password: string;
}