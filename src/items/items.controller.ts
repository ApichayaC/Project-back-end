import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import { CreateItemDtos } from './dto/create-item.dto';
import { ItemsService } from './item.service';
import {Item} from './item.model';

@Controller('items')
export class ItemsController{
    constructor(private readonly itemsService:ItemsService){}

    @Post()
    create(@Body() createItemDtos:CreateItemDtos): Promise<Item> {
        return this.itemsService.create(createItemDtos);
    }

    @Get()
    findAll(): Promise<Item[]>{
        return this.itemsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Item>{
        return this.itemsService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id:string): Promise<void>{
        return this.itemsService.remove(id);
    }
}