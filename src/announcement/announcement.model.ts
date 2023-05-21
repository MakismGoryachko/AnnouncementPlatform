import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne } from "typeorm"
import { ApiProperty } from "@nestjs/swagger"
import { User } from 'src/users/users.model'
import { Region } from "src/region/region.model"
import { Category } from "src/category/category.model"
import { ForeignKey } from "sequelize-typescript"

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
    cost: number

    @ApiProperty({ example: 'Фото', description: 'Фото' })
    @Column({
        nullable: false
    })
    image: string

    @ApiProperty({ example: '12.05.2023', description: 'Дата публикации' })
    @Column({
        nullable: false
    })
    publicationDate: string

    @Column()
    userId: number

    @Column()
    category: string

    @Column()
    region: string

    @ManyToOne(() => User, user => user.announcements)
    user: User

}

