import { HttpService } from './httpService';
import { User } from '../interfaces/userInterface';
export declare class UserService {
    private readonly httpService;
    constructor(httpService: HttpService);
    userApiUrl: string;
    getUsers(): Promise<User[]>;
    getUserById(id: number): Promise<User>;
}
