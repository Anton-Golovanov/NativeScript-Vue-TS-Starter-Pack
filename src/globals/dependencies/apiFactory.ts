import { CoreApiService } from '@/services/apiFactory/coreApi.service';
import { AxiosRepository } from '@/infrastructure/repositories/http/axios.repository';
import { appConfig } from '@/config/app-config';
import { HttpRepository } from '@/infrastructure/repositories/http/http.repository';
import { PtCoreApiService } from '@/core/contracts/services/api';

let coreApiService: CoreApiService;
let httpRepository: HttpRepository;

export function getCoreHttpRepository() {
  if (!httpRepository) {
    httpRepository = new AxiosRepository(appConfig.coreDomain);
  } else {
    httpRepository.setBaseUrl(appConfig.coreDomain);
  }
  return httpRepository;
}

function getCoreApiService(): PtCoreApiService {
  if (!coreApiService) {
    coreApiService = new CoreApiService(getCoreHttpRepository());
  }
  return coreApiService;
}

// ---------------------- //
// ----- apiFactory ----- //
const apiServices = {
  core: getCoreApiService,
};

export const apiFactory = {
  get: (name) => apiServices[name](),
};
