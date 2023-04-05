import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserResponse } from '../interfaces/user-response.interface';
import { User } from '../interfaces/user.interface';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers(): Promise<UserResponse> {
    const users = await this.userService.getUsers();
    return { users };
  }

  @Get(':id')
  async getUserById(@Param('id') id: number): Promise<User> {
    const user = await this.userService.getUserById(id);
    return user;
  }
}
