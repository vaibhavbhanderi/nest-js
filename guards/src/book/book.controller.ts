import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from './book.auth';

@Controller('book')
export class BookController {
   @Get("/allbook")
   @UseGuards(new AuthGuard())
   findAllBook():string{
    return "this is all book api key"
   }
   @Post("/add")
   addbook():string{
    return "this is add book api key"
   }


    
}
