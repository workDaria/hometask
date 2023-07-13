import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsController } from './clients/clients.controller';
import { AutoController } from './auto/auto.controller';
import { ClientsService } from './clients/clients.service';
import { AutoService } from './auto/auto.service';
import { ClientsModule } from './clients/clients.module';
import { AutoModule } from './auto/auto.module';

@Module({
  imports: [ClientsModule, AutoModule],
  controllers: [AppController, ClientsController, AutoController],
  providers: [AppService, ClientsService, AutoService],
})
export class AppModule { }
