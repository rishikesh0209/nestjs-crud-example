import { Entity,Column,PrimaryGeneratedColumn } from "typeorm";

@Entity()  //this creates repository internally 
export class User{

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    email:string

    @Column()
    password:string

}