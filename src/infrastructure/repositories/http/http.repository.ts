import { PtHttpRepositoryContract } from '@/core/contracts/repositories';

export class HttpRepository implements PtHttpRepositoryContract {
  protected constructor() {}
  public setBaseUrl(newUrl: string): void {}

  public async get(url: string, params: object): Promise<any> {
    return await fetch(url, params);
  }
  public async post(url: string, options: object): Promise<any> {
    return await fetch(url, options);
  }
}
