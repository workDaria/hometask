import { Controller, Body, Post, Get, Param, Delete, Patch,Inject } from '@nestjs/common';
import { PatchBookingDTO, PostBookingsDTO } from './dto/bookings.dto';
import { BookingsService } from './bookings.service';

@Controller('bookings')
export class BookingsController {
    constructor(
         public bookingService:BookingsService
        ) {}

    @Get(':customer_id')
    findBooking(@Param('customer_id') customer_id: number) {
        return this.bookingService.findBooking(customer_id)
    }

    @Get()
    getAll() {
        return this.bookingService.getAll()
    }
   
    @Post()
    createBooking(@Body() data: PostBookingsDTO) {
        return this.bookingService.createBooking(data)
    }


    @Delete(':customer_id')
    deleteBooking(@Param('customer_id') customer_id: number) {
        return this.bookingService.deleteBooking(customer_id)
    }

    
    // @Patch()
    // updateBooking(@Body() data: PatchBookingDTO): string {
    //     return this.bookingService.updateBooking(data)
    // }
}
