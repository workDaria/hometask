import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [CustomersService],
  controllers: [CustomersController]
})
export class CustomersModule {}
