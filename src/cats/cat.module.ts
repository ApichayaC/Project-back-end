import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cat } from './cat.model';
import { CatsController } from './cats.controller';
import { CatsService } from './cat.service';


@Module({
    imports :[SequelizeModule.forFeature([Cat])],
    providers: [CatsService],
    controllers: [CatsController],
})

export class CatsModule {}