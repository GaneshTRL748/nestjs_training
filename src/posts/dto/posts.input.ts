import { Field, InputType } from "@nestjs/graphql";
@InputType()
export class Postdto{
    @Field()
    postName: string;
  
    @Field()
    userId: string;
}