import { Field, InputType } from "@nestjs/graphql"
@InputType()
export class userdto{
    @Field()
    email:string
    @Field()
    name:string
    
}