import { HttpRepository } from '@/infrastructure/repositories/http/http.repository.ts';
import { Payload, PtCoreApiService } from '@/core/contracts/services/api';
import { getErrorCatcherService } from '@/globals/dependencies/locator';

let errorApiCatcherService = getErrorCatcherService().errorApi;

export class CoreApiService implements PtCoreApiService {
  constructor(private httpRepository: HttpRepository) {}

  public async login(payload: Payload): Promise<any> {
    return errorApiCatcherService(
      await this.httpRepository.post(
        `/auth/login
      `,
        payload
      )
    );
  }
  W;
}
