import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message-dto';
@Controller('messages')
export class MessagesController {
    @Get()
    listMessages() {
        return "hello";
    }

    @Post()
    // createMessage(@Body() body:any,@Query() query){
    createMessage(@Body() body:CreateMessageDto,@Query() query){

        console.log("body",body);
        console.log("QUERY",query);
    }

    @Get('/:id')
    getMessage(@Param() param){
        console.log("Param",param);
    }
}
