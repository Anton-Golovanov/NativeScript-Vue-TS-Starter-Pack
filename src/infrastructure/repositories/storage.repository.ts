import { PtStorageRepository } from '@/core/contracts/repositories';
import store from '@/infrastructure/store/store';

export class StorageRepository implements PtStorageRepository {
  requestItem(module: string, name: string, payload: any): Promise<any> {
    return store.dispatch(
      `${module === 'root' ? '' : module}${
        module === 'root' ? '' : '/'
      }${name}`,
      payload
    );
  }

  setItem(module: string, name: string, value: any): void {
    store.commit(
      `${module === 'root' ? '' : module}${
        module === 'root' ? '' : '/'
      }${name}`,
      value
    );
  }

  getItem(module: string, name: string): any {
    if (module === 'root') {
      return store.state[name];
    }
    return store.state[module][name];
  }
}
