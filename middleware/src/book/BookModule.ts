import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { NestModule } from '@nestjs/common/interfaces/modules';
import { BookController } from './book.controller';
import { BookMiddleWare } from './book.middleware';


@Module({
  controllers: [BookController]
})
export class BookModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(BookMiddleWare)
      .forRoutes({ path: 'book', method: RequestMethod.GET });
  }
}

