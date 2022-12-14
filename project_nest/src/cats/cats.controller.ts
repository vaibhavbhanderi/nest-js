import { Controller, Delete, Get, Header, Param, Post, Put } from '@nestjs/common';
import {CartService}from "../cart/cart.service"

@Controller('cats')
export class CatsController {
    // public CartService:CartService =new CartService()
    constructor(private CartService:CartService){}
    // add book
    @Post("/add")
addbook():string{
   return this.CartService.addbook()
}


// delete
@Delete("/delete")
deletebook():string{
    return this.CartService.deletebook()
}

// edit 
@Put("/update") 
editbook():string{
    return this.CartService.editbook()
}
// find all
@Get("/allbook")
// @Header('Cache-Control', 'none')
findallbook():string{
    
    return this.CartService.findallbook()
}
// @Get('/findcartbyid/:id')
// // @HttpCode(404)
// findOne(@Param() params): string {
//   console.log(params.id);
//   return `This action returns a #${params.id} cat`;
// }



}  
