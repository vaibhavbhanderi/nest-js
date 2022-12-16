import {
    Body,
    Controller,
    Get,
    HttpStatus,
    Param,
    ParseArrayPipe,
    ParseBoolPipe,
    ParseIntPipe,
    Post, Query, UsePipes,
} from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common/pipes';
import { BookDto } from './dto/book.dto';
import {BookPipe } from "./dto/pipe/book.pipe"


@Controller('book')
export class BookController {


    // @Get('/:id')
    //
    // findBookById(@Query('id', new ParseArrayPipe({ items: Number, separator: ',' })) id: number[]): string {
    //
    //     console.log(id);
    //     return 'book by id';
    // }
    //     @Post("/add")
    //     addbook(@Body(new BookPipe()) book:BookDto):string{
    //         return "Add New Book"
    //     }
    // @UsePipes(new BookPipe())
    // @Post("/add")
    //         addbook(@Body(new BookPipe()) book:BookDto):string{
    //             return "Add New Book"
    //         }
@UsePipes(ValidationPipe)
    @Post("/add")
    addbook(@Body(new BookPipe()) book:BookDto):string{
                    return "Add New Book"
                }

}
