import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from './http.service';
import { User } from '../interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(private readonly httpService: HttpService) {}

  userApiUrl = 'https://jsonplaceholder.typicode.com/users';

  async getUsers(): Promise<User[]> {
    try {
      const { data } = await this.httpService.get<User[]>(this.userApiUrl);
      return data;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch users',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getUserById(id: number): Promise<User> {
    try {
      const { data } = await this.httpService.get<User>(`${this.userApiUrl}/${id}`);
      return data;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch user id',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
