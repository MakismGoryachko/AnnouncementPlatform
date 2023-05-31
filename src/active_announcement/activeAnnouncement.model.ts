import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne } from "typeorm"
import { ApiProperty } from "@nestjs/swagger"
import { User } from 'src/users/users.model'


@Entity('active_announcements')
export class ActiveAnnouncement {
    @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty({ example: 'Iphone 12', description: 'Название объявления' })
    @Column({
        length: 20,
        nullable: true
    })
    name: string

    @ApiProperty({ example: 'Новое описание для объявления', description: 'Описание' })
    @Column({
        length: 250,
        nullable: true
    })
    description: string

    @ApiProperty({ example: '150', description: 'Стоимость' })
    @Column({
        nullable: true
    }
    )
    cost: number

    @ApiProperty({ example: 'Фото', description: 'Фото' })
    @Column({
        nullable: true
    })
    image: string

    @ApiProperty({ example: '12.05.2023', description: 'Дата публикации' })
    @Column({
        nullable: true
    })
    publicationDate: string

    @ApiProperty({ example: '12.05.2023', description: 'Дата публикации' })
    @Column({
        nullable: true
    })
    phoneNumber: string

    @Column({
        nullable: true
    })
    userId: number

    @Column(
        {
            nullable: true
        }
    )
    category: string

    @Column(
        {
            nullable: true
        }
    )
    region: string

    @ManyToOne(() => User, user => user.announcements)
    user: User

    get ownerName(): string {
        return this.user.name
    }
}

