import { AppConfig } from '@/core/models/config/appConfig.model.ts';

const envName: string = TNS_ENV;

export const appConfig: AppConfig = require(`./app.config.${envName}.json`);
