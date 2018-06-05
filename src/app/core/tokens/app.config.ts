import { InjectionToken } from "@angular/core";

export const APP_CONFIG = new InjectionToken('config');

export interface IAppConfig {
  apiUrl: string;
  sectionsUrl: string;
  sectionDetails: Function;
}

export class AppConfig implements IAppConfig {
  apiUrl         = '/api';
  sectionsUrl    = '/api/sections';
  sectionDetails = (id: number) => `/api/section/${id}`;
}
