import { Body, Controller, Get, Param, ParseBoolPipe, Post } from '@nestjs/common';
import { BookDto } from './dto/book.dto';
import { Bookpipe } from './dto/pipe/book.pipe';


@Controller('book')
export class BookController {


    @Get("/:id")
        findBookById(@Param("id",ParseBoolPipe) id:number):string{
            console.log(id, typeof(id))
            return "book by id"
        }
        @Post("/add")
        addbook(@Body(new Bookpipe()) book:BookDto):string{
            return "Add New Book"
        }
}
