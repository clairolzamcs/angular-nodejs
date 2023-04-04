import { UserService } from '../services/userService';
import { UserResponse } from '../interfaces/userResponseInterface';
import { User } from '../interfaces/userInterface';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(): Promise<UserResponse>;
    getUserById(id: number): Promise<User>;
}
