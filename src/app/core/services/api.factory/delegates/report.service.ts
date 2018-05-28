import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { IReport } from '../../../../models/report/report.model';
import { Observable } from 'rxjs';

@Injectable()
export class ReportService {
  constructor(private httpClient: HttpClient) { }

  public getReport(sectionId: number): Observable<IReport> {
    return null;
  }
}
