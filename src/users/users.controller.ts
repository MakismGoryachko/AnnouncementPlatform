import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './users.model';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger/dist';

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){}

    @ApiOperation({summary: "Создание пользователя"})
    @ApiResponse({status: 200, type: User})
    @Post()
    create(@Body() userDto: createUserDto){
        return this.usersService.createUser(userDto)
    }
    
    @ApiOperation({summary: "Получение пользователя по email"})
    @ApiResponse({status: 200, type: User})
    @Get()
    getByEmail(@Param('email') email: string){
        return this.usersService.getUserByEmail(email)
    }

    
    @Get('/oneUser/:id')
    getOneUser(@Param('id') id: number){
        return this.usersService.getOneUser(id)
    }

    @ApiOperation({summary: "Обновление имени пользователя"})
    @ApiResponse({status: 200, type: User})
    @Post('/update')
    updateUser(@Body()userDto: createUserDto){
        return this.usersService.updateuser(userDto)
    }
}