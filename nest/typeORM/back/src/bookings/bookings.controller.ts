import { Controller, Body, Post, Get, Param, Delete } from '@nestjs/common';
import { PostBookingsDTO } from './dto/bookings.dto';

@Controller('bookings')
export class BookingsController {

    constructor(private readonly bookingService) {}

    @Get(':customer_id')
    findBooking(@Param('customer_id') customer_id: number) {
        return this.bookingService.findBooking(customer_id)
    }


   
    @Post()
    createBooking(@Body() data: PostBookingsDTO): string
    {
        return this.bookingService.createBooking(data)
    }


    @Delete(':customer_id')
    deleteBooking(@Param('customer_id') customer_id: number) {
        return this.bookingService.deleteBooking(customer_id)
    }

}
