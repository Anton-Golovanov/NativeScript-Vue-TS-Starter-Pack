export type localStorageValue = string | number | boolean;

export interface PtLocalStorageRepository {
  setItem(key: string, value: localStorageValue): void;
  getItem(key: string, type: string): localStorageValue | undefined;
  removeItem(key: string): void;
  clearAll(): void;
}
