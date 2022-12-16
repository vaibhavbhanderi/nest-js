import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { PassportLocalStrategy } from './local.strategy';

@Module({
    imports:[UserModule],
    controllers:[],
    providers:[PassportLocalStrategy]
})
export class AuthModule {
}
