import { Injectable } from '@nestjs/common';
import { GetAutoDTO, UpdateAutoDto, DeleteDTO } from "./dto/auto.dto";


@Injectable()
export class AutoService
{

    createAuto(data: GetAutoDTO): string
    {
        return `New car is added.\nName and model: ${data.name} ${data.model}\nEngine: ${data.engine}\nColor: ${data.color}`;
    }

    updateAuto(engine: string, data: UpdateAutoDto)
    {
        return `Car's parametres were updated. \nThe new ones are: \nName and model: ${data.name} ${data.model}\nEngine: ${data.engine}\nColor: ${data.color}`;
    }

    deleteAuto(name: string)
    {
        return `Deleted car named ${name}`;
    }
}
