import { Controller, Body, Post, Get, Param } from '@nestjs/common';
import { GetBookingsDTO } from './dto/bookings.dto';

@Controller('bookings')
export class BookingsController {

    constructor(private readonly bookingService) {}

    @Get(':customer_id')
    findBooking(@Param('customer_id') customer_id: number) {
        return this.bookingService.findBooking
    }


   
    @Post()
    createBooking(@Body() data: GetBookingsDTO): string
    {
        return this.bookingService.createBooking(data)
    }



}
