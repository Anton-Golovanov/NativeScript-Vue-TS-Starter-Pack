import { PtStorageService } from '@/core/contracts/services';
import { StorageRepository } from '@/infrastructure/repositories/storage.repository';

export class StorageService implements PtStorageService {
  constructor(private storageRepository: StorageRepository) {}

  public requestItem(module: string, name: string, value: any): Promise<any> {
    return this.storageRepository.requestItem(module, name, value);
  }

  public setItem<T>(module: string, name: string, value: T): void {
    this.storageRepository.setItem(module, name, value);
  }

  public getItem(module: string, name: string): any {
    return this.storageRepository.getItem(module, name);
  }
}
