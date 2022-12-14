import { NestFactory } from '@nestjs/core';
import { Response,Request, NextFunction } from 'express';
import { AppModule } from './app.module';

  function globalmiddlewareone(req:Request,res:Response, next:NextFunction){
    console.log("this  is globle middleware number 1")
    next()
  }
  function globalmiddlewaretwo(req:Request,res:Response, next:NextFunction){
    console.log("this  is globle middleware number 2")
    next()
  }


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(globalmiddlewareone)
  app.use(globalmiddlewaretwo)
  await app.listen(8000);
}
bootstrap();
