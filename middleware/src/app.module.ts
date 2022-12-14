import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BookModule } from "./book/BookModule";

@Module({
  imports: [UsersModule, BookModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
