export interface PtHttpRepositoryContract {
  get(url: string, params: object): Promise<any>;

  post(url: string, options: object): Promise<any>;
}
