import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";



export class  Bookpipe implements PipeTransform{
    transform(value: any, metadata: ArgumentMetadata) {
        console.log(metadata)
        if(value.id==1) return value
       else  throw new BadRequestException('Validation failed');
    }

}    