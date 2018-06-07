import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ISection } from '../models/dashboard/section.model';
import { ISectionDetails } from '../models/section.details/section.details.model';
import { IQuestion } from '../models/interview/question.model';
import { IReport } from '../models/report/report.model';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const request = req.clone({
      headers: req.headers.set('Access-Control-Allow-Origin', '*')
    });

    return next.handle(request);
  }
}
