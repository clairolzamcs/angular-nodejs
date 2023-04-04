import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from '../services/userService';
import { UserResponse } from '../interfaces/userResponseInterface';
import { User } from '../interfaces/userInterface';

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
