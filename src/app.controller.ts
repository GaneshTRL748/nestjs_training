import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Query(() => String)
  getHello(): String {
    return this.appService.getHello();
  }
}
