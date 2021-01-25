export type Payload = {
  [key: string]: string;
};

export interface PtCoreApiService {
  login(payload: Payload): Promise<any>;
}
