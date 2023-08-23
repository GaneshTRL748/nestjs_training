import { Injectable } from '@nestjs/common';
import { PostRepository } from './posts.repository';
import { Postdto } from './dto/posts.input';

@Injectable()
export class PostsService {
    constructor(private readonly postRepo: PostRepository) {}
       createPost(postsdto:Postdto) {
        return this.postRepo.createPost(postsdto);
      }
      async deletePostbyId(id:string){
        const postTodelete=await this.postRepo.findOne({where:{id}})
        if(postTodelete){
          
          postTodelete.deletedAt=new Date()
          await this.postRepo.save(postTodelete)
          return "Post deleted successfully"
        }
        else{
          return "post Not Found"
        }
      }
      async updatepostByid(id:string,postdto:Postdto){
        const postToupdate=await this.postRepo.findOne({where:{id}})
        if(postToupdate){
          postToupdate.name=postdto.postName
          postToupdate.userId=postdto.userId
          postToupdate.updatedAt=new Date()
          await this.postRepo.save(postToupdate)
          return postToupdate
        }
      }
    
}
