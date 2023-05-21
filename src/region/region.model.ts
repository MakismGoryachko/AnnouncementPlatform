import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm"
import { ApiProperty } from "@nestjs/swagger"
import { Announcement } from "src/announcement/announcement.model"

@Entity('region')
export class Region{
    @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty({ example: 'Фрунзенский', description: 'Район' })
    @Column({
        length: 20,
    })
    name: string
    
}
