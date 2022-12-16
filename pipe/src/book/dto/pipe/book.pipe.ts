import { PipeTransform, Injectable, ArgumentMetadata,BadRequestException } from '@nestjs/common';
import 'reflect-metadata';
@Injectable()
export class BookPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log("ok ",value);
    if(value=="22"){
      throw new BadRequestException("invalid input")
    }
    return value;
  }
}