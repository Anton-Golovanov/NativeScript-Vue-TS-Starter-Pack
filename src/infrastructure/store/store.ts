import Vue from 'nativescript-vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from '@/core/models/store/Types';
import { user } from './user';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    test: 'test',
  },
  mutations: {
    changeTest(state, payload: any) {
      state.test = payload;
    },
  },
  modules: {
    user,
  },
};

export default new Vuex.Store<RootState>(store);
