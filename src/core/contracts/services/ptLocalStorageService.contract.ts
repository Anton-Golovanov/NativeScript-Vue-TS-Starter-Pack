import { localStorageValue } from '@/core/contracts/repositories';

export interface PtLocalStorageService {
  getValue(name: string, type: string): localStorageValue | undefined;
  setValue(name: string, value: localStorageValue): void;
  removeValue(name: string): void;
  clearAll();
}
