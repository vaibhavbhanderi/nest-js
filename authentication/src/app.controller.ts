import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport/dist';


@Controller("app")
export class AppController {
  constructor() {}

  @Get()
@UseGuards(AuthGuard("local"))
  getHello(): string {
    return "this is privet data"
  }
}
