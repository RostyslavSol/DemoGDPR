import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IReport } from '../../../../models/report/report.model';
import { State } from '../../../redux';
import { ReportActionTypes } from '../../../redux/actions/report.actions';
import { APP_CONFIG, IAppConfig } from '../../../tokens/app.config';

@Injectable()
export class ReportService {
  constructor(
    @Inject(APP_CONFIG)
    private _config: IAppConfig,
    private _httpClient: HttpClient,
    private _store: Store<State>
  ) { }

  public getReport(sectionId: number): Observable<IReport> {
    return this._httpClient
      .get<IReport>(this._config.sectionReport(sectionId))
      .pipe(
        tap(data => {
          this._store.dispatch({
            type: ReportActionTypes.LoadReport,
            payload: data
          });

          return data;
        })
      );
  }
}
