import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 20,
        unique: true
    })
    email: string

    @Column({
        length: 20
    })
    name: string

    @Column()
    password: string

    @Column({
        length: 20,
        default: 'USER'
    })
    role: string
}