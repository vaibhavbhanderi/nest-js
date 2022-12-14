import { Body, Controller, Delete, Get ,Param,Put,Post} from "@nestjs/common";
import { BookService } from "../book.service";
import { Book } from "./book.dto";
@Controller("book")
export class BookController{
    constructor(private bookService:BookService){}
@Get("/findall")
getAllBook():Book[]{
    return this.bookService.findAllBooks()
}
@Put("/updatebook")
updateBook(@Body() book:Book):string{
    return this.bookService.updateBookService(book)
}
@Delete("/delete/:id")
deleteBook(@Param("id") bookID:string):string{
    return this.bookService.deleteBookService(bookID)
}
@Post("/add")
addBook(@Body() book:Book):string{
    return this.bookService.addBookService(book)
}


}