import { InjectionToken } from "@angular/core";

export const APP_CONFIG = new InjectionToken('config');

export interface IAppConfig {
  apiUrl: string;
  sectionsUrl: string;
  sectionDetails: Function;
  sectionQuestion: Function;
  sectionReport: Function;
}

export class AppConfig implements IAppConfig {
  apiUrl          = '/api';
  sectionsUrl     = '/api/sections';
  sectionDetails  = (sectionId: number) => `/api/section/${sectionId}`;
  sectionQuestion = (sectionId: number, questionId: number) => `/api/section/${sectionId}/question/${questionId}`;
  sectionReport   = (sectionId: number) => `/api/section/${sectionId}/report`;
}
