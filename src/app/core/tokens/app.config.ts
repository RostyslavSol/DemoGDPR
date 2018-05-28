import { InjectionToken } from "@angular/core";

export const APP_CONFIG = new InjectionToken('config');

export interface IAppConfig {
  apiUrl: string;
  sectionsUrl: string;
}

export class AppConfig implements IAppConfig {
  apiUrl      = '/api';
  sectionsUrl = '/api/sections';
}
