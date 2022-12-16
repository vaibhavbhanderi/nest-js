import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}
  create(createUserDto: CreateUserDto):Promise<User> {
    let user :User=new User()
    user.fristname=createUserDto.fristname;
    user.lastname=createUserDto.lastname;
    user.age=createUserDto.age;
    return this.usersRepository.save(user)

  }

  findAll():Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number)  {  
    return this.usersRepository.findOneBy({id});
  }

  update(id: number, user: UpdateUserDto) {
  return this.usersRepository.update(id, user) 
  }

  remove(id: number) {
    return this.usersRepository.delete(id);
  }
}
  