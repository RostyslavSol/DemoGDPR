import { InjectionToken } from '@angular/core';
import { environment } from '../../../environments/environment';

export const APP_CONFIG = new InjectionToken('config');

export interface IAppConfig {
  apiUrl: string;
  sectionsUrl: string;
  sectionDetails: Function;
  sectionQuestion: Function;
  sectionReport: Function;
}

/**
 * Routes:
 *    GET:
 *      /sections
 *      /sections/:id
 *      /sections/:id/questions/:id
 *      /sections/:id/report
 *    POST:
 *      /sections/:id
 */
export class AppConfig implements IAppConfig {
  apiUrl          = `${environment.knowledge_base_api}`;
  sectionsUrl     = `${environment.knowledge_base_api}/sections`;

  sectionDetails  = (sectionId: number) => `${environment.knowledge_base_api}/sections/${sectionId}`;

  sectionQuestion = (sectionId: number, questionId: number) =>
                      `${environment.knowledge_base_api}/sections/${sectionId}/questions/${questionId}`

  sectionReport   = (sectionId: number) => `${environment.knowledge_base_api}/sections/${sectionId}/report`;
}
