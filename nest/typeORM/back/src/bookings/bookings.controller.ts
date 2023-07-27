import { Controller, Body, Post } from '@nestjs/common';
import { GetBookingsDTO } from './dto/bookings.dto';

@Controller('bookings')
export class BookingsController {

    constructor(private readonly bookingService) {}

   
    @Post()
    createBooking(@Body() data: GetBookingsDTO): string
    {
        return this.bookingService.createBooking(data)
    }



}
