import {BelongsTo, Column, ForeignKey, Model, Table} from 'sequelize-typescript';
import { Cat } from 'src/cats/cat.model';

@Table
export class Item extends Model {

    @Column
    collar: string;
  
    @Column
    shirt: string;
  
    @Column({ defaultValue: true })
    isActive: boolean;
    /////////////////////////////////////

    @ForeignKey(()=> Cat)
    @Column
    Catid : number ;

    @BelongsTo(()=>Cat , 'Catid')
    cat : Cat ;
  }