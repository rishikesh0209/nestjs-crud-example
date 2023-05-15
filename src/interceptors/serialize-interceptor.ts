import { UseInterceptors,NestInterceptor,ExecutionContext,CallHandler } from "@nestjs/common";
import { plainToClass, plainToClassFromExist } from "class-transformer";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { UserDto } from "src/users/dtos/user.dto";
import { User } from "src/users/user.entity";


export function Serialize(dto:any){
    return UseInterceptors(new Serializeinterceptor(dto));
}

export class Serializeinterceptor implements NestInterceptor{
    constructor(private dto:any){}
    intercept(context: ExecutionContext, handler: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        // Run something before the request goes to request handler(controller)


        //run before sending the response
        return handler.handle().pipe(
            map((data:any)=>{
                return plainToClass(this.dto,data,{
                    excludeExtraneousValues:true  // remove all other properties and keep only userdto properties
                })
            }),
        )
        throw new Error("Method not implemented.");
    }
    
}