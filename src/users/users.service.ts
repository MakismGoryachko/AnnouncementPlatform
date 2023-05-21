import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createUserDto } from './dto/create-user.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User)
     private userRepository: Repository<User>){ }

    async createUser(dto: createUserDto){
        const user = await this.userRepository.save(dto)
        return user;
    }

    async getUserByEmail(email: string){
        const user = await this.userRepository.findOne({where: {email}})
        return user;
    }
    
    async updateuser(dto: createUserDto){
        const email = dto.email
        const user = await this.userRepository.findOne({where: {email}})
        user.name = dto.name
        const updateduser = await this.userRepository.save(user)
        return updateduser;
    }
}