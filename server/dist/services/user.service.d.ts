import { HttpService } from './http.service';
import { User } from '../interfaces/user.interface';
export declare class UserService {
    private readonly httpService;
    constructor(httpService: HttpService);
    userApiUrl: string;
    getUsers(): Promise<User[]>;
    getUserById(id: number): Promise<User>;
}
