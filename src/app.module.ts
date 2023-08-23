import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOpitions } from './database/db-source';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: './graphqlschema.gql',
      driver: ApolloDriver,
      sortSchema: true,
      playground: true,
    }),
    TypeOrmModule.forRoot(dataSourceOpitions),
    UsersModule,
    PostsModule,
  ],
  providers:[AppController,AppService]
})
export class AppModule {}
