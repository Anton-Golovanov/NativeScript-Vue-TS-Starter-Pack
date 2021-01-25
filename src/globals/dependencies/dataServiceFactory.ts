import { PtUserDataService } from '@/core/contracts/services/data';
import { UserDataService } from '@/services/Data';
import {
  apiFactory,
  getLocalStorageRepo,
  getStorageRepository,
} from '@/globals/dependencies';

let userDataService: UserDataService;

function getUserDataService(): PtUserDataService {
  if (!userDataService) {
    userDataService = new UserDataService(
      getStorageRepository(),
      getLocalStorageRepo(),
      apiFactory.get('core')
    );
  }

  return userDataService;
}

// -------------------------- //
// ----- ServiceFactory ----- //
const dataServices = {
  user: getUserDataService,
};

export const dataServiceFactory = {
  get: (name) => dataServices[name](),
};
