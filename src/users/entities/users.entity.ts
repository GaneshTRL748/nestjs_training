import { Field, ObjectType } from '@nestjs/graphql';
import { Posts } from 'src/posts/entities/posts.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
@ObjectType()
@Entity({ name: 'users' })
export class User {
  @Field()
  @PrimaryGeneratedColumn('uuid', { name: 'user_id' })
  id: string;
  @Field()
  @Column('varchar', { name: 'user_email' })
  email: string;
  @Field()
  @Column('varchar', { name: 'user_name' })
  name: string;
  @Field()
  @Column({ name: 'createdAt' })
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
  @Field()
  @Column({ name: 'updatedAt' })
  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
  @Field(() => [Posts], { nullable: true })
  @OneToMany(() => Posts, (posts) => posts.user)
  posts: Posts[];
  @Field()
  @Column({name:"deletedAt"})
  @DeleteDateColumn({type:'timestamp',default:()=>'null'})
  deletedAt:Date;
}
