import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
    validateUser(userName: string, password: string) {
        throw new Error('Method not implemented.');
    }
    public users:User[]=[
        {
        userName:"User1",
        password:"admin1",
        email:"user1gmail.com"
    },
    {
        userName:"User2",
        password:"admin2",
        email:"user1gmai2.com"
    },
    {
        userName:"User3",
        password:"admin3",
        email:"user1gmai3.com"
    }
    
]
getUserByName(username:string):User{
    return this.users.find((user:User)=>{
        user.userName===username
    })
} 
}