import { Injectable } from '@nestjs/common';
import { UserRepository } from './users.repository';
import { userdto } from './dto/user-input';
import { User } from './entities/users.entity';
import { PostRepository } from 'src/posts/posts.repository';
@Injectable()
export class UsersService {
    constructor(private readonly userRepo: UserRepository, readonly postRepo:PostRepository) {}
    public async createUser(userdto:userdto) {
        return this.userRepo.createUser(userdto);
      }
      public async getAllusers(){
        return this.userRepo.find()
      }
      async getUserById(id: string){
        return await this.userRepo.findOne({ where: { id } });
      }
      async deleteUserById(id:string) {
        const userToDelete = await this.userRepo.findOne({ where: { id } });
        const postsToDelete= await this.postRepo.createQueryBuilder('post').where('post.user_id = :id', { id }).getMany()
        postsToDelete.map(value=>{value.deletedAt=new Date()})
        if (!userToDelete) {
          return null;  
        }
        userToDelete.deletedAt=new Date()
        await this.userRepo.save(userToDelete)
        await this.postRepo.save(postsToDelete)
        return userToDelete;
      }
      async updateUser(id: string, updateUserInput: userdto) {
        const userToUpdate = await this.userRepo.findOne({ where: { id } });
        const currentTimestamp: Date= new Date();
        if(!userToUpdate){
            return "User not Found"
        }
        else{
            userToUpdate.name = updateUserInput.name;
            userToUpdate.email = updateUserInput.email;
            userToUpdate.updatedAt=currentTimestamp
            await this.userRepo.save(userToUpdate);
            return "User updated successfully";
        }  
      }
   public  async getusersPost(id:string){
     return await this.userRepo.createQueryBuilder('user')
     .leftJoinAndSelect('user.posts', 'post')
     .where('user.id = :id', {  id})
     .getOne();
      }

     
}
