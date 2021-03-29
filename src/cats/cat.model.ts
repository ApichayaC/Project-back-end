import {Column, Model, Table,HasMany} from 'sequelize-typescript';
//import { HasMany } from 'sequelize/types';
import { Item } from 'src/items/item.model';

@Table
export class Cat extends Model{

    @Column
    firstName: string;
  
    @Column
    branch: string;

    @Column
    age: number ; 
  
    @Column({ defaultValue: true })
    isActive: boolean;

    @HasMany(() => Item )
    items : Item[] ;
  }

