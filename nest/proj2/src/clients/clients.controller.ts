import { Controller, Get, Post, Body, Patch, Delete, Param } from '@nestjs/common';
import { GetClientsDTO, UpdateClientDto, DeleteClientDTO } from "./dto/clients.dto";
import { ClientsService } from "./clients.service";

@Controller('clients')
export class ClientsController
{

    constructor(private readonly clientsSRV: ClientsService, private clientsUPD: ClientsService, private clientsDEL: ClientsService) { }

    @Get()
    getClientList(): string
    {
        return `The list of clients:\nClient1\nClient2\nClient3`;
    }

    @Post()
    getClientData(@Body() data: GetClientsDTO): string
    {
        return `New client is registred.\nName: ${data.name} ${data.surname}\nEmail: ${data.email}`;
    }

    @Patch()
    updateAuto(@Body() data: UpdateClientDto): string
    {
        return this.clientsUPD.updateClient(data.name, data.surname, data.email, data);
    }

    @Delete(':name')  // удаляет по имени 
    deleteAuto(@Param('name') name: string): string
    {
        return this.clientsDEL.deleteClient(name);
    }

}
