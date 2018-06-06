import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ISectionDetails } from '../../../../models/section.details/section.details.model';
import { State } from '../../../redux';
import { APP_CONFIG, IAppConfig } from '../../../tokens/app.config';
import { tap } from 'rxjs/operators';
import { SectionDetailsActionTypes } from '../../../redux/actions/section.details.actions';

@Injectable()
export class SectionDetailsService {

  constructor(
    @Inject(APP_CONFIG)
    private _config: IAppConfig,
    private _httpClient: HttpClient,
    private _store: Store<State>
  ) {}

  public getSectionDetails(sectionId: number): Observable<ISectionDetails> {
    return this._httpClient
            .get<ISectionDetails>(this._config.sectionDetails(sectionId))
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
