import { Injectable } from "@nestjs/common";
import { User } from "src/user/entities/user.entity";
import { DataSource, Repository } from "typeorm";


@Injectable()
export class UsersRepository extends Repository<User> {
 
    // constructor(private dataSource: DataSource) {
    //     super(User, dataSource.createEntityManager());
    //   }
    
      async getById(id: number) {
        return this.findOne({ where: { id } });
      }
  }

 