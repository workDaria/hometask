export class GetClientsDTO
{
    readonly name: string;
    readonly surname: string;
    readonly email: string;
    readonly password: string;
}

export class UpdateClientDto
{
    name: string;
    surname: string;
    email: string;
    password: string;
}

export class DeleteClientDTO
{
    name: string;
    surname: string;
    email: string;
    password: string;
}