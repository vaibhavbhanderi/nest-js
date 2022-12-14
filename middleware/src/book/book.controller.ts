import { Controller,Get,Post} from '@nestjs/common';

@Controller('book')
export class BookController {
    
    @Get()
    findAllUser():string{
        return "this is will return all book"
    }
    @Post()
    addUser():string{
        return "this api will add book"
    }
    
}
