import { IsString } from "class-validator";

export class createCategoryDto{

    @IsString({ message: 'Должно быть строкой' })
    readonly name: string;
}