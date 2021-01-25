import { GetterTree } from 'vuex';
import { RootState, UserState } from '@/core/models/store/Types';

export const getters: GetterTree<UserState, RootState> = {
  fullname(state): string {
    return 'test';
  },
};
