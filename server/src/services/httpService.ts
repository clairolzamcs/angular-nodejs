// src/services/http.service.ts
import { Injectable } from '@nestjs/common';
import { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';
import axios from 'axios';

@Injectable()
export class HttpService {
  private readonly axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create();
  }

  async get<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.get<T>(url, config);
  }
}
