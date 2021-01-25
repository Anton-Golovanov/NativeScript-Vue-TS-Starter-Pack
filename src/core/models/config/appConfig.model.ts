export enum LoggingLevelEnum {
  Log = 'Log',
  Warning = 'Warning',
  Error = 'Error',
  Debug = 'Debug',
}

export interface AppConfig {
  loggingEnabled: boolean;
  loggingLevel: LoggingLevelEnum;

  coreDomain: string;
  outletDomain: string;
  acquiringDomain: string;
  notificationsDomain: string;
  serviceMessageDomain: string;
  calendarDomain: string;
  attendanceDomain: string;
  commonDomain: string;

  chatDomain: string;
}
