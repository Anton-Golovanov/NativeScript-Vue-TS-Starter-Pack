import { Payload } from '@/core/contracts/services/api';

export interface PtUserDataService {
  login(payload: Payload): Promise<boolean>;
}
