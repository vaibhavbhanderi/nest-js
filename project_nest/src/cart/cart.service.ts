import { Injectable } from '@nestjs/common';

@Injectable()
export class CartService {
    addbook():string{
        return "this add book";
    }
    deletebook():string{
        return "this delete book";
    }
    editbook():string{
        return "this edit book"
    }
    findallbook():string{
    
        return "this all book"
    }
}
