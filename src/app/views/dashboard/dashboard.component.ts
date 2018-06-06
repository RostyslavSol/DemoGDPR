import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromDashboard from '../../core/redux/reducers/dashboard.reducers';
import { ISection } from '../../models/dashboard/section.model';
import { State } from './../../core/redux/index';
import { DashboardActionTypes } from '../../core/redux/actions/dashboard.actions';
import { CommonActionTypes } from '../../core/redux/actions/select.section.action';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {

  sections$: Observable<ISection[]>;

  constructor(
    private _store: Store<State>,
    private _router: Router
  ) { }

  ngOnInit() {
    this.sections$ = this._store.select(fromDashboard.sectionsSelector);
  }

  public selectSection(section: ISection): void {
    this._store.dispatch({
      type: CommonActionTypes.SelectSection,
      payload: section
    });

    this._router.navigate(['/details', section.sectionId]);
  }
}
