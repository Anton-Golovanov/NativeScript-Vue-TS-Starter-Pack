import { RootState, UserState } from '@/core/models/store/Types';
import { ActionTree } from 'vuex';

export const actions: ActionTree<UserState, RootState> = {
  get({ commit, dispatch }, y): any {
    console.log('success', y);
  },
};
