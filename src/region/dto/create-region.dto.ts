import { IsString } from "class-validator";

export class createRegionDto{

    @IsString({ message: 'Должно быть строкой' })
    readonly name: string;
}