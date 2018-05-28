import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';

import { Observable, of } from "rxjs";
import { ISection } from '../models/dashboard/section.model';

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

  respond = (body: any) => of(new HttpResponse({
    status: 200,
    body: body
  }))

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes('sections')) {
      return this.respond(this.sections);
    }

    return next.handle(req);
  }
}
