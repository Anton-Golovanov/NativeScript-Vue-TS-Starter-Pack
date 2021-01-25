import { PtStorageService } from '@/core/contracts/services';
import { RouterRepository } from '@/infrastructure/repositories/navigation/router.repository.ts';
import { StorageService } from '@/services/stores/storage.service';
import {
  PtLocalStorageRepository,
  PtRouterRepository,
  PtStorageRepository,
} from '@/core/contracts/repositories';
import { PtLocalStorageService } from '@/core/contracts/services/ptLocalStorageService.contract.ts';
import { LocalStorageRepository } from '@/infrastructure/repositories/localStorage.repository';
import { LocalStorageService } from '@/services/stores/localStorage.service';
import { StorageRepository } from '@/infrastructure/repositories/storage.repository';
import { PtErrorCatcherService } from '@/core/contracts/services/ptErrorCatcherService.contract';
import { ErrorCatcherService } from '@/services/errorCatcher.service';

let routerRepository: PtRouterRepository;
let storageRepository: PtStorageRepository;
let storageService: PtStorageService;
let localStorageRepository: PtLocalStorageRepository;
let localStorageService: PtLocalStorageService;
let errorCatcherService: PtErrorCatcherService;

export function getRouterRepository(): PtRouterRepository {
  if (!routerRepository) {
    routerRepository = new RouterRepository();
  }
  return routerRepository;
}

export function getStorageRepository(): PtStorageRepository {
  if (!storageRepository) {
    storageRepository = new StorageRepository();
  }
  return storageRepository;
}

export function getStorageService(): PtStorageService {
  if (!storageService) {
    storageService = new StorageService(getStorageRepository());
  }
  return storageService;
}

export function getLocalStorageRepo(): PtLocalStorageRepository {
  if (!localStorageRepository) {
    localStorageRepository = new LocalStorageRepository();
  }
  return localStorageRepository;
}

export function getLocalStorageService(): PtLocalStorageService {
  if (!localStorageService) {
    localStorageService = new LocalStorageService(getLocalStorageRepo());
  }
  return localStorageService;
}

export function getErrorCatcherService(): PtErrorCatcherService {
  if (!errorCatcherService) {
    errorCatcherService = new ErrorCatcherService();
  }
  return errorCatcherService;
}
