import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message-dto';
import { MessagesService } from './messages.service';
@Controller('messages')
export class MessagesController {
    constructor(public messageService:MessagesService){}
    @Get()
    listMessages() {
        return this.messageService.findAll();
        // return "hello";
    }

    @Post()
    // createMessage(@Body() body:any,@Query() query){
    createMessage(@Body() body:CreateMessageDto,@Query() query){
        return this.messageService.create(body.content);
        console.log("body",body);
        console.log("QUERY",query);
    }

    @Get('/:id')
    getMessage(@Param() id:string){
        console.log("Param",id);
        return this.messageService.findOne(id);
    }
}
