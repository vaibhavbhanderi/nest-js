import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { RepoModule } from './repo/repo.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 49159,
      username: 'postgres',
      password: 'postgrespw',
      database: 'postgres',
      entities: [__dirname+"/**/*.entity{.ts,.js}"],
      synchronize: true,
      logging:true
    }),
    UserModule,
    RepoModule,
  ],
  controllers: [], 
  providers: [],
})
export class AppModule {}
