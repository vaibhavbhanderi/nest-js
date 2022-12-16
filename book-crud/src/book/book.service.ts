import { Injectable } from "@nestjs/common";
import { Book } from "./data/book.dto";
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class BookService{
  public books: Book[]=[];
 

  addBookService(book:Book):string{
   book.id= uuidv4();
    this.books.push(book);
    return "book has been successfully added"
  }
  updateBookService(book:Book):string{
let index =this.books.findIndex((currentBook)=>{
    return currentBook.id==book.id
})
this.books[index]=book
    return "book has been successfully update"
  }
deleteBookService(bookID:string):string{
    this.books= this.books.filter((book)=>{
        return book.id!==bookID;
    }) 

    return "book has been successfully delete"
}
findAllBooks():Book[]{
    return this.books
}


}

