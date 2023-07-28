import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CustomersModule } from './customers/customers.module';
import * as process from 'process';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { BookingsModule } from './bookings/bookings.module';

@Module({
  imports: [BookingsModule, CustomersModule, ConfigModule.forRoot({
    envFilePath: `.${process.env.ENVIRONMENT}.env`
    }), 
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: configService.get<'aurora-mysql'>('DB_TYPE'),
        host: configService.get<string>('DB_HOST'),

        port: +configService.get<number>('DB_PORTS'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),

        autoLoadEntities: true,
        logging: true,
        synchronize: configService.get<boolean>('DB_SYNC')
      })
    }),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
