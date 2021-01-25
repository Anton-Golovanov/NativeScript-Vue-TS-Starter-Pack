import { PtLocalStorageService } from '@/core/contracts/services/ptLocalStorageService.contract.ts';
import { localStorageValue } from '@/core/contracts/repositories';
import { LocalStorageRepository } from '@/infrastructure/repositories/localStorage.repository';

export class LocalStorageService implements PtLocalStorageService {
  constructor(private localStorageRepository: LocalStorageRepository) {}

  public getValue(
    name: string,
    type: string = 'string'
  ): localStorageValue | undefined {
    return this.localStorageRepository.getItem(name, type);
  }

  public setValue(name: string, value: localStorageValue): void {
    this.localStorageRepository.setItem(name, value);
  }

  public removeValue(name: string): void {
    return this.localStorageRepository.removeItem(name);
  }

  public clearAll(): void {
    this.localStorageRepository.clearAll();
  }
}
