import Vue from 'nativescript-vue';

import { PtRouterRepository } from '@/core/contracts/repositories';
// import { routesEnum } from '@/infrastructure/navigation';

export class RouterRepository implements PtRouterRepository {
  constructor() {}

  public getCurrentRouter() {
    return Vue.prototype.$navigator.path;
  }

  public goBack(options: object): void {
    Vue.prototype.$navigator.back(options);
  }

  public goTo(rout: string, options?: Object): void {
    Vue.prototype.$navigator.navigate(rout, options);
  }
}
