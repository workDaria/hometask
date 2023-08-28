import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingsEntity } from './entities/bookings.entity';
import { BookingsService } from './bookings.service';
import { BookingsController } from './bookings.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([BookingsEntity])
    ],
    providers: [BookingsService],
    controllers: [BookingsController],
    exports: [TypeOrmModule]

})


export class BookingsModule {}
