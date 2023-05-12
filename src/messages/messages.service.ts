import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "./messages.repository";

@Injectable()
export class MessagesService{
    constructor(public messagesRepo:MessagesRepository){}

    findOne = async(id:string)=>{
        return this.messagesRepo.findByID(id);
    }
    findAll = async() =>{
        return this.messagesRepo.findAll();

    }
    create = async(message:Object) =>{
        return this.messagesRepo.create(message);

    }
}