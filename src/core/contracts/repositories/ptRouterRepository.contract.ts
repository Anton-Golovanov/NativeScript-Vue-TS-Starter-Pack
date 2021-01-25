// import { routesEnum } from '@/infrastructure/navigation';

export interface PtRouterRepository {
  getCurrentRouter(): string;

  goTo(rout: string, options: object): void;

  goBack(options: object): void;
}
