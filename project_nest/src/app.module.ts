import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { CatsController } from './cats/cats.controller';
import { CartService } from './cart/cart.service';

@Module({
  imports: [UserModule, ProfileModule],
  controllers: [ CatsController],
  providers: [AppService, CartService],
})
export class RootModule {
  constructor(){
    console.log("Root Module");
  }
}
