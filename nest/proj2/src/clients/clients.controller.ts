import { Controller, Get, Post, Body } from '@nestjs/common';
import { GetClientsDTO } from "./dto/clients.dto";

@Controller('clients')
export class ClientsController
{

    @Get()
    getClientList(): string
    {
        return `client1, client2`;
    }

    @Post()
    getClientData(@Body() data: GetClientsDTO): string
    {
        return `New client is registred.\nName: ${data.name} ${data.surname}\nEmail: ${data.email}`;
    }


}
