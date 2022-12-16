import { IsString ,IsEmail, IsNumber } from "class-validator";



export class BookDto{
    @IsNumber()
    id:Number;
    @IsString()
    name:string
    @IsEmail()
    email:string
}
