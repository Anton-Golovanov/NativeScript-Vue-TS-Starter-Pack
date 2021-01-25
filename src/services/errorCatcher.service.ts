import { PtErrorCatcherService } from '@/core/contracts/services/ptErrorCatcherService.contract';
import { ApiResponse } from '@/core/customTypes';

export class ErrorCatcherService implements PtErrorCatcherService {
  constructor() {}
  public async errorApi(resp: ApiResponse): Promise<any> {
    if (resp.data.status !== 'ok') {
      console.error(
        resp.data.status_code,
        resp.data.status_code,
        resp.data.message
      );
      return null;
    }
    return resp.data.data;
  }
}
