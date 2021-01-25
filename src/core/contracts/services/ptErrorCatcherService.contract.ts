import { ApiResponse } from '@/core/customTypes';

export interface PtErrorCatcherService {
  errorApi(resp: ApiResponse): any;
}
