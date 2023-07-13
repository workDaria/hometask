import { Controller, Get, Post, Body, Patch, Delete } from '@nestjs/common';
import { GetAutoDTO, UpdateAutoDto } from "./dto/auto.dto";
import { AutoService } from "./auto.service";

@Controller('auto')
export class AutoController
{

    constructor(private readonly autoSRV: AutoService, private autoUPD: AutoService) { }

    @Get()   // выдает список
    getAutoList(): string
    {
        return `Added cars: \n`;
    }

    @Post()   // добавляет машину
    createAuto(@Body() data: GetAutoDTO): string
    {
        return this.autoSRV.createAuto(data);
    }

    @Patch()   // обновляет engine
    updateAuto(@Body() data: UpdateAutoDto): string
    {
        return this.autoUPD.updateAuto(data.engine, data);
    }

    @Delete()   // удаляет машину
    deleteAuto() { }

}
