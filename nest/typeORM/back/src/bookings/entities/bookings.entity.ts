import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm"

@Entity('bookings')
export class BookingsEntity { 
    @PrimaryGeneratedColumn()
    customer_id: number

    @Column()
    country: string

    @Column()
    city: string

    @Column()
    hotel_name: string

    @PrimaryGeneratedColumn()
    hotel_id: number

    @Column()
    room_number: number

    @Column()
    price: number

    @PrimaryColumn()
    dateFrom: Date

    @PrimaryColumn()
    dateTo: Date
}