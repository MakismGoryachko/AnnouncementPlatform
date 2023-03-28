import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { ApiProperty } from "@nestjs/swagger"
import { User } from 'src/users/users.model'

@Entity('announcements')
export class Announcement {
    @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty({ example: 'Iphone 12', description: 'Название объявления' })
    @Column({
        length: 20,
    })
    name: string

    @ApiProperty({ example: 'Новое описание для объявления', description: 'Описание' })
    @Column({
        length: 250
    })
    description: string

    @ApiProperty({ example: '150', description: 'Стоимость' })
    @Column()
    price: number

    @ApiProperty({ example: 'Фрунзенский', description: 'Район' })
    @Column({
        length: 25
    })
    area: string
    
    @ApiProperty({ example: 'Фото', description: 'Фото' })
    @Column({
        nullable: false
    })
    image: string

    @ManyToOne(() => User, user => user.announcements)
    user: User
}