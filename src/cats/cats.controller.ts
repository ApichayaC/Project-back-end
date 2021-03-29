import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import { CreateCatDtos } from './dto/create-cat.dto';
import { CatsService } from './cat.service';
import {Cat} from './cat.model';

@Controller('cats')
export class CatsController{
    constructor(private readonly catsService:CatsService){}

    @Post()
    create(@Body() createCatDto:CreateCatDtos): Promise<Cat> {
        return this.catsService.create(createCatDto);
    }

    @Get()
    findAll(): Promise<Cat[]>{
        return this.catsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Cat>{
        return this.catsService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id:string): Promise<void>{
        return this.catsService.remove(id);
    }
}