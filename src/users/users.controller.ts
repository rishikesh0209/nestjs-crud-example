import { Body, Controller, Post,Get,Patch,Param,Query, Delete,UseInterceptors } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user-dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dtos/update-user-dto';
import { Serialize, Serializeinterceptor } from 'src/interceptors/serialize-interceptor';
import { UserDto } from './dtos/user.dto';
@Controller('users')
export class UsersController {
    constructor(private userService: UsersService){}

    @Post('/signup')
    createUser(@Body() body:CreateUserDto){
        this.userService.create(body.email,body.password);
        console.log("hello the body for signup",body)
    }
    
    @UseInterceptors(new Serializeinterceptor(UserDto)) // 1st way of using interceptors
    @Get('/:id')
    getUser(@Param('id') id: string){
        console.log("handler is running....")
        return this.userService.findOne(parseInt(id));
    }

    @Serialize(UserDto) // 2nd way of using interceptors
    @Get()
    getAllUsers(@Query('email') email:string){
        return this.userService.find(email);
    }

    @Delete('/:id')
    removeUser(@Param('id') id:string){
        return this.userService.remove(parseInt(id));
    }

    @Patch('/:id')
    updateTheUser(@Param('id') id:string,@Body() body:UpdateUserDto){
        return  this.userService.update(parseInt(id),body);
    }
}
