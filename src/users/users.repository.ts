import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { userdto } from './dto/user-input';
import { BaseRepository } from 'src/database/base.repository';
import { User } from './entities/users.entity';
@Injectable()
export class UserRepository extends BaseRepository<User> {
  constructor(private readonly dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }
  public async createUser(userdto:userdto) {
    return this.save({
      name:userdto.name,
      email:userdto.email
    });
  }
  
}