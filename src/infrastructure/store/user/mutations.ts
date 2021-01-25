import { MutationTree } from 'vuex';
import { UserState } from '@/core/models/store/Types';

export const mutations: MutationTree<UserState> = {
  setProfile(state, payload: any) {
    state.profile = payload;
  },
};
