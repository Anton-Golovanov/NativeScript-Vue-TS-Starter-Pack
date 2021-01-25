import axios from 'axios';
import { appConfig } from '@/config/app-config';

const authUrl = `${appConfig.coreDomain}`;
const coreUrl: string = `${appConfig.coreDomain}/rest/v1`;

export const authRepository = axios.create({
  baseURL: authUrl,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Source: 'rest-api',
  },
});

export const coreRepository = axios.create({
  baseURL: coreUrl,
  headers: {
    'Content-Type': 'application/json',
    Source: 'rest-api',
    Accept: 'application/json',
  },
});