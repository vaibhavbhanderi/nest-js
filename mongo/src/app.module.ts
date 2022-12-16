import { Module } from '@nestjs/common';
import { ConfigModule ,ConfigService} from '@nestjs/config';

import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './book/book.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
  MongooseModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService) => ({
      uri: configService.get<string>('MONGODB_URI'),
    }),
    inject: [ConfigService],}),
    BookModule
  ],
  controllers: [],
  providers: [],  
})
  

export class AppModule {
  
}
