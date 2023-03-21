import { Injectable } from '@nestjs/common';
import { HttpException, UnauthorizedException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';
import { createUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt/dist'
import * as bcrypt from 'bcryptjs'
import { User } from 'src/users/users.model';

@Injectable()
export class AuthService {

    constructor(private userService: UsersService,
        private jwtService: JwtService) { }

    async login(userDto: createUserDto) {
        const candidate = await this.userService.getUserByEmail(userDto.email)
        if (!candidate) {
            throw new HttpException('Пользователь с таким email не найден', HttpStatus.BAD_REQUEST)
        }
        const user = await this.validateUser(userDto)
        return this.generateToken(user)

    }

    async registration(userDto: createUserDto) {
        const candidate = await this.userService.getUserByEmail(userDto.email)
        if (candidate) {
            throw new HttpException('Пользователь с таким email уже существует', HttpStatus.BAD_REQUEST)
        }
        const hashPassword = await bcrypt.hash(userDto.password, 5)
        const user = await this.userService.createUser({ ...userDto, password: hashPassword })
        return this.generateToken(user)
    }

    private async generateToken(user: User) {
        const payload = { email: user.email, id: user.id, role: user.role }
        return {
            token: this.jwtService.sign(payload)
        }
    }

    private async validateUser(userDto: createUserDto) {
        const user = await this.userService.getUserByEmail(userDto.email)
        const hashPassword = await bcrypt.compare(userDto.password, user.password)
        if(user && hashPassword){
            return user;
        }
        throw new UnauthorizedException({message: "Неккоректный email или пароль"})
    }
}