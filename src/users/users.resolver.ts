import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { userdto } from './dto/user-input';
import { User } from './entities/users.entity';
import { promises } from 'fs';
import { NotFoundException, Post } from '@nestjs/common';
import { Posts } from 'src/posts/entities/posts.entity';
@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}
  @Mutation(()=>User)
  public async createUser( @Args('userdto') userdto: userdto,){
    return this.usersService.createUser(userdto);
  }
  @Query(()=>[User])
  public async getAllusers(){
    return this.usersService.getAllusers()
  }
  @Query(()=> User)
  async getUserById(@Args('id') id: string) {
    const user = await this.usersService.getUserById(id);
    console.log(user)
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }
  @Mutation(() => String)
  async deleteUserById(@Args('id') id: string) {
    const deletedUser = await this.usersService.deleteUserById(id);
    if (!deletedUser) {
      return "User Not found"  
    }
    return "Deleted successfully";
  }
  @Mutation(() => String)
  async updateUser(
    @Args('id') id: string,
    @Args('userdto') userdto: userdto, // Create this input type according to your schema
  ) {
    const updatedUser = await this.usersService.updateUser(id, userdto);
    return updatedUser;
  }
  @Query(() => User)
  public async getusersPost(@Args('id') id: string) {
    return this.usersService.getusersPost(id);
  }
  
  
}
