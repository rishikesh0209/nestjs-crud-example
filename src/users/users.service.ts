import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  create = async (email: string, password: string) => {
    const user = this.repo.create({ email: email, password: password }); //creates a instance of the entity
    return this.repo.save(user); // saves the data or updates the data
  };

  findOne = (id: number) => {
    return this.repo.findOneBy({ id: id });
  };
  find = (email: string) => {
    return this.repo.find({
      where: {
        email: email,
      },
    });
  };
  update = async(id:number, attrs:Partial<User>)=>{ //partial defines the user entity properties needs to be there but not all 
    const user = await this.repo.findOne({where:{id:id}});
    if(!user){
        throw new Error("user not found")
    }
    Object.assign(user,attrs); //copy attr data to user fetched 
    return this.repo.save(user);
  }
  remove = async(id:number)=>{
    const user = await this.repo.findOne({where:{id:id}});
    if(!user){
        throw new Error("user not found")
    }
    return this.repo.remove(user);
  }
}
