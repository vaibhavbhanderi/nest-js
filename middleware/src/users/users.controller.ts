import { Controller,Get,Post} from '@nestjs/common';


@Controller('users')
export class UsersController {

    @Get()
    findAllUser():string{
        return "this is will return all user"
    }
    @Post()
    addUser():string{
        return "this api will add user"
    }
    
    }
