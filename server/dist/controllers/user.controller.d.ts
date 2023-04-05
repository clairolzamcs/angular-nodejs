import { UserService } from '../services/user.service';
import { UserResponse } from '../interfaces/user-response.interface';
import { User } from '../interfaces/user.interface';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(): Promise<UserResponse>;
    getUserById(id: number): Promise<User>;
}
