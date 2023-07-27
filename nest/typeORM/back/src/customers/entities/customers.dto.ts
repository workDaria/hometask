import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm"

@Entity('users')
export class CustomerEntity { 

    @PrimaryGeneratedColumn()
    customer_id: number

    @Column()
    name: string

    @Column()
    surname: string

    @PrimaryColumn()
    dateOfBirth: Date
}


