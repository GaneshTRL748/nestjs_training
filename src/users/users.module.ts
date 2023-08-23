import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { UserRepository } from './users.repository';
import { PostRepository } from 'src/posts/posts.repository';

@Module({
  providers: [UsersResolver, UsersService,UserRepository,PostRepository],
})
export class UsersModule {}
