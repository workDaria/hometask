export class GetAutoDTO
{
    readonly name: string;
    readonly model: string;
    readonly color: string;
    readonly engine: string;
}

export class UpdateAutoDto
{
    name: string;
    model: string;
    color: string;
    engine: string;
}

export class DeleteDTO
{
    name: string;
    model: string;
    color: string;
    engine: string;
}