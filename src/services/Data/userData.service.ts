import { PtUserDataService } from '@/core/contracts/services/data';
import { StorageRepository } from '@/infrastructure/repositories/storage.repository';
import { CoreApiService } from '@/services/apiFactory/coreApi.service';
import { Payload, PtCoreApiService } from '@/core/contracts/services/api';
import { LocalStorageRepository } from '@/infrastructure/repositories/localStorage.repository';

export class UserDataService implements PtUserDataService {
  constructor(
    private storageRepository: StorageRepository,
    private localStorageRepository: LocalStorageRepository,
    private coreApiService: PtCoreApiService
  ) {}

  public async login(payload: Payload): Promise<boolean> {
    let resp = await this.coreApiService.login(payload);
    if (resp) {
      this.storageRepository.setItem('user', 'setProfile', resp);
      console.log('resp.id', resp.id);
      console.log('resp.role', resp.role);
      this.localStorageRepository.setItem('userId', resp.id);
      this.localStorageRepository.setItem('userRole', resp.role);
      return true;
    }
    return false;
  }
}
