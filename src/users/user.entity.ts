import { Report } from "../reports/report.entity";
import { Entity,Column,PrimaryGeneratedColumn, AfterInsert, AfterUpdate, AfterRemove,OneToMany } from "typeorm";
@Entity()  //this creates repository internally 
export class User{

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    email:string

    @Column()
    password:string

    @OneToMany(()=>Report,(report)=>report.user)
    reports: Report[]

    // hooks are executed when saved with entity as in example of userservice
    @AfterInsert()
    logAfterInsert(){
        console.log("here its is logged after create",this.id);
    }

    @AfterUpdate() // called while save() during update
    logAfterUpdate(){
        console.log("here its is logged after update",this.id);
    }
    @AfterRemove() //called while remove() during remove
    logAfterRemove(){
        console.log("here its is logged after remove",this.id);
    }

}