import {
  localStorageValue,
  PtLocalStorageRepository,
} from '@/core/contracts/repositories';

import {
  getBoolean,
  setBoolean,
  getNumber,
  setNumber,
  getString,
  setString,
  remove,
  clear,
} from '@nativescript/core/application-settings';

const getTypes = {
  string: getString,
  number: getNumber,
  boolean: getBoolean,
};

const setTypes = {
  string: setString,
  number: setNumber,
  boolean: setBoolean,
};

export class LocalStorageRepository implements PtLocalStorageRepository {
  getItem(key: string, type: string): localStorageValue | undefined {
    return getTypes[type](key);
  }

  setItem(key: string, value: localStorageValue): void {
    setTypes[typeof value](key, value);
  }

  removeItem(key: string): void {
    remove(key);
  }

  clearAll(): void {
    clear();
  }
}
