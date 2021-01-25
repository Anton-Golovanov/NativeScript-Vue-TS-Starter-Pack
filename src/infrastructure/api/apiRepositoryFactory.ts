import coreRepository from './apiCoreRepository'

const repositories = {
  core: coreRepository,
}

export const RepositoryFactory = {
  get: name => repositories[name],
};