import { Injectable, } from '@nestjs/common';
import { GetClientsDTO } from "./dto/clients.dto";

@Injectable()
export class ClientsService
{
    createCLient(data: GetClientsDTO): string
    {
        return `New client is registred.\nName: ${data.name} ${data.surname}\nEmail: ${data.email}`;
    }
}
