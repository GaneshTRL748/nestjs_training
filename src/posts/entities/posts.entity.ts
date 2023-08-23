import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "src/users/entities/users.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@ObjectType()
@Entity({ name: 'posts' })
export class Posts{
    @Field()
    @PrimaryGeneratedColumn('uuid', { name: 'post_id' })
    id: string;
    @Field()
    @Column({ name: 'post_name' })
    name: string;
    @Field()
    @Column({ name: 'user_id' })
    userId: string;
    @Field()
    @Column({ name: 'createdAt' })
    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
    @Field()
    @Column({ name: 'updatedAt' })
    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
     updatedAt: Date;
    @Field(()=>User)
    @ManyToOne(() => User, (user) => user.posts)
    @JoinColumn({ name: 'user_id' })
    user: User;
    @Field()
  @Column({name:"deletedAt"})
  @DeleteDateColumn({type:'timestamp',default:()=>'null'})
  deletedAt:Date;
}