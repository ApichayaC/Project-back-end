import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import {  CreateCatDtos } from './dto/create-cat.dto';
import {  Cat } from './cat.model';

@Injectable()
export class CatsService{
    constructor(
        @InjectModel(Cat)
        private readonly catModel: typeof Cat,        
    ){}
    
    create(createCatDtos: CreateCatDtos): Promise<Cat>{
        const cat = new Cat();
        cat.firstName = createCatDtos.firstName;
        cat.branch = createCatDtos.branch;
        cat.age = createCatDtos.age;
        return cat.save();
    }

    async findAll(): Promise<Cat[]>{
        return this.catModel.findAll();
    }

    findOne(id: string): Promise<Cat>{
        return this.catModel.findOne({
            where:{
                id,
            }
        })
    }
    async remove(id:string): Promise<void>{
        const cat = await this.findOne(id);
        await cat.destroy();
    }
}