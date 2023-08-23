import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { PostRepository } from './posts.repository';
@Module({
  providers: [PostsResolver, PostsService,PostRepository],
})
export class PostsModule {}
