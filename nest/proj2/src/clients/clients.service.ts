import { Injectable, } from '@nestjs/common';
import { GetClientsDTO, UpdateClientDto, DeleteClientDTO } from "./dto/clients.dto";

@Injectable()
export class ClientsService
{
    createCLient(data: GetClientsDTO): string
    {
        return `New client is registred.\nName: ${data.name} ${data.surname}\nEmail: ${data.email}`;
    }

    updateClient(name: string, surname: string, email: string, data: UpdateClientDto)
    {
        return `Client's parametres were updated. \nThe new ones are: \nName and surname: ${data.name} ${data.surname}\nEmail: ${data.email}`;
    }

    deleteClient(name: string)
    {
        return `Deleted client ${name}`;
    }
}
