import { Body, Controller, Post } from '@nestjs/common';
import { createUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authSetvice: AuthService){}

    @Post('/login')
    login(@Body() userDto: createUserDto){
        return this.authSetvice.login(userDto)
        
    }

    @Post('/registration')
    registration(@Body() userDto: createUserDto){
        return this.authSetvice.registration(userDto)
        
    }
}