import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';

import { Observable, of } from "rxjs";
import { ISection } from '../models/dashboard/section.model';
import { ISectionDetails } from '../models/section.details/section.details.model';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  sections: ISection[] = [
    {
      title: 'Lawfulness',
      text: 'Assess lawfulness of personal data processing. With questions from Art. 6 GDPR',
      redirectUrl: 'details',
      svgUrl: '../../../assets/images/svg/lawfulness.svg'
    }, {
      title: 'Registry',
      text: 'Check if your organization requires implementation of the Registry for processing activities',
      redirectUrl: 'details',
      svgUrl: '../../../assets/images/svg/registry.svg'
    }, {
      title: 'Data Protection Officer',
      text: 'Check if your organization requires assignment of Data Protection Officer',
      redirectUrl: 'details',
      svgUrl: '../../../assets/images/svg/dpo.svg'
    }, {
      title: 'Individual Rights',
      text: 'Assess your ability to provide individual rights of data subjects',
      redirectUrl: 'details',
      svgUrl: '../../../assets/images/svg/individual.rights.svg'
    }, {
      title: 'Data Breach Notification',
      text: 'Assess your data breach notification mechnism to conform the Regulation',
      redirectUrl: 'details',
      svgUrl: '../../../assets/images/svg/data.breach.notification.svg'
    }, {
      title: 'Data Export outside EU',
      text: 'Assess the lawfulness of exporting personal data outside European Union',
      redirectUrl: 'details',
      svgUrl: '../../../assets/images/svg/data.export.svg'
    }
  ];

  sectionDetails: ISectionDetails = {
    sectionId: 1,
    announcement: {
      title: 'Lawfulness of Personal Data  Processing',
      info: 'Assess lawfulness of personal data processing according to articles of General Data Protection Regulation:',
      list: [
        'Article 6 EU GDPR "Lawfulness of processing"',
        'Article 7 EU GDPR "Conditions for consent"',
        'Article 8 EU GDPR "Conditions applicable to child\'s consent in relation to information society services"'
      ]
    },
    overviews: [
      {
        title: 'WHAT WILL BE ASKED',
        text: 'You will be asked questions related to the professional activity of your organization. There is an option to let the system know if you don’t know the answer on the question. References and additional help to answer the questions will be provided.'
      },
      {
        title: 'WOULD THIS INFORMATION BE EXPOSED',
        text: 'The interview is fully anonymous and the answers are not stored in the system unless you are the authenticated user and directly command the system to save your interview.'
      }
    ],
    questionnaire: []
  };

  respond = (body: any) => of(new HttpResponse({
    status: 200,
    body: body
  }))

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes('sections')) {
      return this.respond(this.sections);
    }

    if (req.url.includes('section')) {
      return this.respond(this.sectionDetails);
    }

    return next.handle(req);
  }
}
