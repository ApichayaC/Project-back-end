import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import {  CreateItemDtos } from './dto/create-item.dto';
import {  Item } from './item.model';

@Injectable()
export class ItemsService{
    constructor(
        @InjectModel(Item)
        private readonly itemModel: typeof Item,        
    ){}
    
    create(createItemDtos: CreateItemDtos): Promise<Item>{
        const item = new Item();
        item.collar = createItemDtos.collar;
        item.shirt = createItemDtos.shirt;
        item.Catid = createItemDtos.Catid ;
        return item.save();
    }

    async findAll(): Promise<Item[]>{
        return this.itemModel.findAll();
    }

    findOne(id: string): Promise<Item>{
        return this.itemModel.findOne({
            where:{
                id,
            }
        })
    }
    async remove(id:string): Promise<void>{
        const item = await this.findOne(id);
        await item.destroy();
    }
}