import { BadRequestException, Injectable } from '@nestjs/common';
import { GetBookingsDTO, PostBookingsDTO } from './dto/bookings.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookingsEntity } from './entities/bookings.entity';

@Injectable()
export class BookingsService {
    constructor(
        @InjectRepository(BookingsEntity)
        private bookingsRepository: Repository<BookingsEntity>
    ) {}

        async createBooking(data: PostBookingsDTO) {
            const idIsRepeated = await this.bookingsRepository.findOne({
                where: {
                    room_number: data.room_number
                }
            })

            if (idIsRepeated) throw new BadRequestException('This room is already taken')

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
