import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { HttpService } from './services/http.service';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [UserService, HttpService],
})
export class AppModule {}
