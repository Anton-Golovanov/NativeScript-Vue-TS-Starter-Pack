import { coreRepository } from './apiRepository'

const auth = '/auth';

export default {
  getUserInfo(payload) {
    return coreRepository.get(`${auth}/user`, { params: payload });
  },
}