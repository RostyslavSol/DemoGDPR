import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IQuestion } from '../../../../models/interview/question.model';
import { IAnswer } from '../../../../models/interview/answer.model';
import { APP_CONFIG, IAppConfig } from '../../../tokens/app.config';
import { Store } from '@ngrx/store';
import { State } from '../../../redux';
import { InterviewActionTypes } from '../../../redux/actions/interview.actions';
import { IAnswersPayload } from '../../../../models/interview/answers.payload';

@Injectable()
export class InterviewService {
  constructor(
    @Inject(APP_CONFIG)
    private _config: IAppConfig,
    private _httpClient: HttpClient,
    private _store: Store<State>
  ) {}

  public getQuestion(sectionId: number, questionId: number): Observable<IQuestion> {
    return this._httpClient
            .get<IQuestion>(this._config.sectionQuestion(sectionId, questionId))
            .pipe(
              tap(data => {
                this._store.dispatch({
                  type: InterviewActionTypes.LoadQuestion,
                  payload: data
                });

                return data;
              })
            );
  }

  public postAnswers(sectionId: number, answers: IAnswer[]): Observable<IAnswersPayload> {
    const body: IAnswersPayload = {
      sectionId: sectionId,
      answers: answers
    };

    return this._httpClient
            .post<IAnswersPayload>(this._config.sectionDetails(sectionId), body);
  }
}
