export interface PtStorageRepository {
  requestItem(module: string, name: string, payload: any): Promise<any>;
  setItem(module: string, name: string, value: any): void;
  getItem(module: string, name: string): any;
}
