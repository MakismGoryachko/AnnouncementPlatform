import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { createUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/users.model';
import { AuthService } from './auth.service';

@ApiTags('Регистрация/авторизация')
@Controller('auth')
export class AuthController {

    constructor(private authSetvice: AuthService){}

    @ApiOperation({summary: "Авторизация"})
    @ApiResponse({status: 200, type: User})
    @Post('/login')
    login(@Body() userDto: createUserDto){
        return this.authSetvice.login(userDto)
        
    }

    @ApiOperation({summary: "Регистрация"})
    @ApiResponse({status: 200, type: User})
    @Post('/registration')
    registration(@Body() userDto: createUserDto){
        return this.authSetvice.registration(userDto)
        
    }
}