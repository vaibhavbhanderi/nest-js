import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { Request } from "express";

@Injectable()
export class AuthGuard implements CanActivate {
    // public key:string="eiffuwhfwhsfsqw4w3784298323024932-2"
    public username:string="vaibhav"
    public password:string="123"
    canActivate(context: ExecutionContext): boolean {
        const ctx = context.switchToHttp();
        const request=ctx.getRequest<Request>();
    //     if(request.header("key")===undefined){

    //         return false
    //     }
       
    //     return (request.header("key")===this.key)

    if(request.header("username")===undefined|| request.header("password")===undefined) return false
  return (request.header("username")===this.username&& request.header("password")===this.password)

    }

}


 