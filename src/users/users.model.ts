import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { ApiProperty } from "@nestjs/swagger"
import { Announcement } from "src/announcement/announcement.model"

@Entity('users')
export class User {
    @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
    @PrimaryGeneratedColumn()
    id: number
    
    @ApiProperty({ example: 'user@mail.com', description: 'Почтовый адрес' })
    @Column({
        length: 20,
        unique: true
    })
    email: string

    @ApiProperty({ example: 'Максим', description: 'Имя' })
    @Column({
        length: 20
    })
    name: string

    @ApiProperty({ example: '12345678', description: 'Пароль' })
    @Column()
    password: string

    @ApiProperty({ example: 'USER', description: 'Роль' })
    @Column({
        length: 20,
        default: 'USER'
    })
    role: string
    
    @OneToMany(() => Announcement, (announcement) => announcement.userId)
    announcements: Announcement[]
}