import axios from 'axios';
import { HttpRepository } from '@/infrastructure/repositories/http/http.repository.ts';
import { PtHttpRepositoryContract } from '@/core/contracts/repositories';

export class AxiosRepository
  extends HttpRepository
  implements PtHttpRepositoryContract {
  private axiosInstance: any;
  public constructor(baseUrl: string) {
    super();
    this.axiosInstance = axios.create({ baseURL: baseUrl });
  }
  public setBaseUrl(newUrl: string): void {
    this.axiosInstance.baseURL = newUrl;
  }
  public async get(url: string, params: object): Promise<any> {
    return await this.axiosInstance.get(url, { params });
  }
  public async post(url: string, options: object): Promise<any> {
    return await this.axiosInstance.post(url, options);
  }
}
