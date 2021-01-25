import Vue from 'nativescript-vue';
import VueDevtools from 'nativescript-vue-devtools';
import { i18n } from '@/i18n';

import Navigator from 'nativescript-vue-navigator';
import { routes } from '@/infrastructure/navigation';
Vue.use(Navigator, { routes });

if (TNS_ENV !== 'production') {
  Vue.use(VueDevtools, { host: '192.168.1.48' });
}
import store from '@/infrastructure/store/store';

Vue.registerElement(
  'BarcodeView',
  () => require('@nativescript-community/ui-barcodeview').BarcodeView
);


new Vue({
  i18n,
  store,
  render: (h) => h('Navigator', { attrs: { defaultRoute: '/login' } }),
}).$start();
