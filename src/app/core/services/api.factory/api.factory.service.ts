import { Injectable }       from '@angular/core';
import { HttpClient }       from '@angular/common/http';

import { ISectionDetails }  from '../../../models/section.details/section.details.model';
import { IQuestion }        from '../../../models/interview/question.model';
import { IAnswer }          from '../../../models/interview/answer.model';
import { IReport }          from '../../../models/report/report.model';
import { ISection }         from '../../../models/dashboard/section.model';

import { DashboardService } from './delegates/dashboard.service';
import { DetailsService }   from './delegates/details.service';
import { InterviewService } from './delegates/interview.service';
import { ReportService }    from './delegates/report.service';

import { Observable }       from 'rxjs';

@Injectable()
export class ApiFactoryService {
  constructor(
    private _dashboardService:  DashboardService,
    private _detailsService:    DetailsService,
    private _interviewService:  InterviewService,
    private _reportService:     ReportService
  ) { }

  public getSections(): Observable<ISection[]> {
    return this._dashboardService.getSections();
  }

  public getSectionDetails(sectionId: number): Observable<ISectionDetails> {
    return this._detailsService.getSectionDetails(sectionId);
  }

  public getQuestion(sectionId: number, questionId: number): Observable<IQuestion> {
    return this._interviewService.getQuestion(sectionId, questionId);
  }

  public postAnswer(sectionId: number, questionId: number): Observable<IAnswer> {
    return this._interviewService.postAnswer(sectionId, questionId);
  }

  public getReport(sectionId: number): Observable<IReport> {
    return this._reportService.getReport(sectionId);
  }
}
