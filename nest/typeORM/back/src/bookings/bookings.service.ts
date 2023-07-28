import { BadRequestException, Injectable } from '@nestjs/common';
import { PostBookingsDTO, PatchBookingDTO } from './dto/bookings.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookingsEntity } from './entities/bookings.entity';


@Injectable()
export class BookingsService {
    constructor(
        @InjectRepository(BookingsEntity)
        private bookingsRepository: Repository<BookingsEntity>
    ) {}


        findBooking(customer_id) {
            return this.bookingsRepository.findBy(customer_id)
        }


        deleteBooking(customer_id) {
            return this.bookingsRepository.remove(customer_id)
        }

        async updateBooking(customer_id: number, data: PatchBookingDTO) {
            await this.bookingsRepository.update(data, {
                where: {
                    customer_id
                }
            })

            return {data}
        }

        async createBooking(data: PostBookingsDTO) {
            const roomIsTaken = await this.bookingsRepository.findOne({
                where: {
                    room_number: data.room_number
                }
            })

            if (roomIsTaken) 
            throw new BadRequestException('This room is already taken')

            const booking = await this.bookingsRepository.save({
                country: data.country,
                city: data.city,
            
                hotel_name: data.hotel_name,
            
                room_number: data.room_number,
                price: data.price,
                
                dateFrom: data.dateFrom,
                dateTo: data.dateTo
            })
            
            return {booking}
        }

} 
