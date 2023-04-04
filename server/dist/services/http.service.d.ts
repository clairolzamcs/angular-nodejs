import { AxiosResponse, AxiosRequestConfig } from 'axios';
export declare class HttpService {
    private readonly axiosInstance;
    constructor();
    get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>;
}
