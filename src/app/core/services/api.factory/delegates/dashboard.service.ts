import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISection } from '../../../../models/dashboard/section.model';
import { APP_CONFIG, IAppConfig } from '../../../tokens/app.config';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { DashboardState } from '../../../store/reducers/dashboard.reducers';
import { DashboardActionTypes } from '../../../store/actions/dashboard.actions';
import { State } from '../../../store';



@Injectable()
export class DashboardService {
  config: IAppConfig;

  constructor(
    @Inject(APP_CONFIG) config: IAppConfig,
    private _httpClient: HttpClient,
    private _store: Store<State>
  ) {
    this.config = config;
  }

  public getSections(): Observable<ISection[]> {
    return this._httpClient
            .get<ISection[]>(this.config.sectionsUrl)
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
