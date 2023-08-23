import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Postdto } from './dto/posts.input';
import { Posts } from './entities/posts.entity';

@Resolver()
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}
  @Mutation(()=>Posts)
  createPost(@Args('postsdto') postsdto:Postdto) {
    return this.postsService.createPost(postsdto);
  }
  @Mutation(()=>String)
  deletePostbyId(@Args('id') id:string){
    return this.postsService.deletePostbyId(id)
  }
  @Mutation(()=>Posts)
  updatepostByid(@Args('id')id:string,@Args('postdto') postdto:Postdto){
    return this.postsService.updatepostByid(id,postdto)
  }
}
