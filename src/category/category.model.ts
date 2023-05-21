import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"
import { ApiProperty } from "@nestjs/swagger"
import { Announcement } from "src/announcement/announcement.model"

@Entity('category')
export class Category {
    @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty({ example: 'Телефоны', description: 'Категория' })
    @Column({
        length: 20,
    })
    name: string
}
