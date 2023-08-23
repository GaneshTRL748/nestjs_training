import { Injectable } from '@nestjs/common/decorators';
import { BaseRepository } from 'src/database/base.repository';
import { DataSource } from 'typeorm';
import { Posts } from './entities/posts.entity';
import { Postdto } from './dto/posts.input';
@Injectable()
export class PostRepository extends BaseRepository<Posts> {
  constructor(private readonly dataSource: DataSource) {
    super(Posts, dataSource.createEntityManager());
  }
  async createPost(postsdto:Postdto) {
    return this.save({
        name: postsdto.postName,
        userId: postsdto.userId,
    });
  }
}