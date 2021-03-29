import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Item } from './item.model';
import { ItemsController } from './items.controller';
import { ItemsService } from './item.service';


@Module({
    imports :[SequelizeModule.forFeature([Item])],
    providers: [ItemsService],
    controllers: [ItemsController],
})

export class ItemsModule {}