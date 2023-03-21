import { IsString, Length, IsEmail } from "class-validator";

export class createUserDto {
    @IsString({message: 'Должно быть строкой'})
    @IsEmail({}, {message: 'Неккоректный email'})
    readonly email: string;

    @IsString({message: 'Должно быть строкой'})
    readonly name: string;

    @IsString({message: 'Должно быть строкой'})
    @Length(4, 16, {message: "Пароль должен содержать не менее 4 символов и не более 16"})
    readonly password: string;
}