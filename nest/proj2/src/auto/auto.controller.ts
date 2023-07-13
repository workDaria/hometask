import { Controller, Get, Post, Body, Patch, Delete, Param } from '@nestjs/common';
import { DeleteDTO, GetAutoDTO, UpdateAutoDto } from "./dto/auto.dto";
import { AutoService } from "./auto.service";

@Controller('auto')
export class AutoController
{

    constructor(private readonly autoSRV: AutoService, private autoUPD: AutoService, private autoDEL: AutoService) { }

    @Get()   // выдает список
    getAutoList(): string
    {
        return `The list of cars:\nCar1\nCar2\nCar3`;
    }

    @Post()   // добавляет 
    createAuto(@Body() data: GetAutoDTO): string
    {
        return this.autoSRV.createAuto(data);
    }

    @Patch()   // обновляет engine
    updateAuto(@Body() data: UpdateAutoDto): string
    {
        return this.autoUPD.updateAuto(data.engine, data);
    }

    @Delete(':name')   // удаляет по имени
    deleteAuto(@Param('name') name: string): string
    {
        return this.autoDEL.deleteAuto(name);
    }

}
