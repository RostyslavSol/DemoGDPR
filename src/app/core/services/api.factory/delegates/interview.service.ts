import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IQuestion } from '../../../../models/interview/question.model';
import { IAnswer } from '../../../../models/interview/answer.model';

@Injectable()
export class InterviewService {
  constructor(private httpClient: HttpClient) { }

  public getQuestion(sectionId: number, questionId: number): Observable<IQuestion> {
    return null;
  }

  public postAnswer(sectionId: number, questionId: number): Observable<IAnswer> {
    return null;
  }
}
