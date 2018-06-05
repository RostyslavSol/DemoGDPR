import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ISectionDetails } from '../../../../models/section.details/section.details.model';
import { State } from '../../../store';
import { APP_CONFIG, IAppConfig } from '../../../tokens/app.config';
import { tap } from 'rxjs/operators';
import { SectionDetailsActionTypes } from '../../../store/actions/section.details.actions';

@Injectable()
export class SectionDetailsService {
  config: IAppConfig;

  constructor(
    @Inject(APP_CONFIG) config: IAppConfig,
    private _httpClient: HttpClient,
    private _store: Store<State>
  ) {
    this.config = config;
  }

  public getSectionDetails(sectionId: number): Observable<ISectionDetails> {
    return this._httpClient
            .get<ISectionDetails>(this.config.sectionDetails(sectionId))
            .pipe(
              tap(data => {

                this._store.dispatch({
                  type: SectionDetailsActionTypes.LoadSectionDetails,
                  payload: data
                });

                return data;
              })
            );
  }
}
