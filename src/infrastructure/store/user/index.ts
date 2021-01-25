import { Module } from 'vuex';
import { UserState, RootState } from '@/core/models/store/Types';
import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';

export const state: UserState = {
  profile: {},
  account: {},
};

const namespaced: boolean = true;

export const user: Module<UserState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
