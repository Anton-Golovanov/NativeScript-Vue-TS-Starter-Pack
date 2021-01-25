export interface PtStorageService {
  requestItem(module: string, name: string, value: any): Promise<any>;

  setItem(module: string, name: string, value: any): void;

  getItem(module: string, name: string): any | undefined;
}
