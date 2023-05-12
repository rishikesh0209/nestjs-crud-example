import { Entity,Column,PrimaryGeneratedColumn } from "typeorm";

@Entity()  //this creates repository internally 
export class Reports{

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    price:string

}