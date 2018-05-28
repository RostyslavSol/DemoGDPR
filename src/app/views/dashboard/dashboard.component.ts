import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DashboardState } from '../../core/store/reducers/dashboard.reducers';
import { ISection } from '../../models/dashboard/section.model';
import { State } from "./../../core/store/index";

import * as fromDashboard from '../../core/store/reducers/dashboard.reducers';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {

  sections$: Observable<ISection[]>;

  constructor(
    private _store: Store<State>
  ) { }

  ngOnInit() {
    this.sections$ = this._store
      .pipe(
        select(fromDashboard.sectionsSelector)
      );
  }

}
