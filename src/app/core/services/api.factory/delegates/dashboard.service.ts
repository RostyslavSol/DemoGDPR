import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISection } from '../../../../models/dashboard/section.model';
import { APP_CONFIG, IAppConfig } from '../../../tokens/app.config';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { DashboardState } from '../../../redux/reducers/dashboard.reducers';
import { DashboardActionTypes } from '../../../redux/actions/dashboard.actions';
import { State } from '../../../redux';



@Injectable()
export class DashboardService {
  constructor(
    @Inject(APP_CONFIG)
    private _config: IAppConfig,
    private _httpClient: HttpClient,
    private _store: Store<State>
  ) {}

  public getSections(): Observable<ISection[]> {
    return this._httpClient
            .get<ISection[]>(this._config.sectionsUrl)
            .pipe(
              tap(data => {

                this._store.dispatch({
                  type: DashboardActionTypes.LoadSections,
                  payload: data
                });

                return data;
              })
            );
  }
}
