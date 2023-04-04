"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const httpService_1 = require("./httpService");
let UserService = class UserService {
    constructor(httpService) {
        this.httpService = httpService;
        this.userApiUrl = 'https://jsonplaceholder.typicode.com/users';
    }
    async getUsers() {
        try {
            const { data } = await this.httpService.get(this.userApiUrl);
            return data;
        }
        catch (error) {
            throw new common_1.HttpException('Failed to fetch users', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getUserById(id) {
        try {
            const { data } = await this.httpService.get(`${this.userApiUrl}/${id}`);
            return data;
        }
        catch (error) {
            throw new common_1.HttpException('Failed to fetch user id', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [httpService_1.HttpService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=userService.js.map