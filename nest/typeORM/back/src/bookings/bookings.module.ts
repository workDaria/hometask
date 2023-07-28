import { Module } from '@nestjs/common';
// import { BookingsService } from './bookings.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingsEntity } from './entities/bookings.entity';
// import { BookingsController } from './bookings.controller';

@Module({
    imports: [TypeOrmModule.forFeature([BookingsEntity])],
    // providers: [BookingsService],
    // controllers: [BookingsController,],
    exports: [TypeOrmModule]
})


export class BookingsModule {}
