import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/user.entity';


@Injectable()
export class PassportLocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly userService:UserService){
        super();
    }

    validate(userName:string,password:string):User{

            const user=  this.userService.getUserByName(userName)
            console.log(user)
            if(user.password==password) return user
            if(user==undefined) throw new UnauthorizedException()
        }
}
  