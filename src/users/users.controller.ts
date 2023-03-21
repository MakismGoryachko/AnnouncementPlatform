import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){}

    @Post()
    create(@Body() userDto: createUserDto){
        return this.usersService.createUser(userDto)
    }

    @Get()
    getByEmail(@Body('email') email){
        return this.usersService.getUserByEmail(email)
    }

    @Post('/update')
    updateUser(@Body()userDto: createUserDto){
        return this.usersService.updateuser(userDto)
    }
}