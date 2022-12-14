import { Injectable, NestMiddleware } from "@nestjs/common";
import { Response,Request, NextFunction } from "express";


@Injectable()
export class BookMiddleWare implements NestMiddleware{
    use(req: Request, res: Response, next:NextFunction) {
        let protocol=req.protocol
        let host=req.get("host")
        let url=req.originalUrl
        let method=req.method       
        let date=new Date().toDateString()
      console.log(protocol+"://"+host+url+" "+method+" "+date )
      next()
    }

}