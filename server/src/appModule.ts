import { Module } from '@nestjs/common';
import { AppController } from './controllers/appController';
import { UserController } from './controllers/userController';
import { UserService } from './services/userService';
import { HttpService } from './services/httpService';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [UserService, HttpService],
})
export class AppModule {}
