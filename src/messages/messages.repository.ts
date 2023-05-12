import { Injectable } from "@nestjs/common";

@Injectable()
export class MessagesRepository{

    findByID = async(id:string) =>{
        return new Promise((resolve,reject)=>{
            resolve(id);
        });
    }
    findAll = async() =>{
        return new Promise((resolve,reject)=>{
            resolve([
                {
                    color: "red",
                    value: "#f00"
                },
                {
                    color: "green",
                    value: "#0f0"
                },
                {
                    color: "blue",
                    value: "#00f"
                },
                {
                    color: "cyan",
                    value: "#0ff"
                },
                {
                    color: "magenta",
                    value: "#f0f"
                },
                {
                    color: "yellow",
                    value: "#ff0"
                },
                {
                    color: "black",
                    value: "#000"
                }
            ]);
        });
    }
    create = async(message:Object) =>{
        return new Promise((resolve,reject)=>{
            resolve(message);
        });
    }

}