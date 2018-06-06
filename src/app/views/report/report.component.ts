import { Component, OnInit } from '@angular/core';
import { IReport } from '../../models/report/report.model';
import { Store } from '@ngrx/store';
import { State } from '../../core/redux';
import { Observable } from 'rxjs';
import { reportSelector } from '../../core/redux/reducers/report.reducers';

@Component({
  selector: 'report',
  templateUrl: 'report.component.html'
})
export class ReportComponent implements OnInit {
  report$: Observable<IReport>;

  constructor(private _store: Store<State>) { }

  ngOnInit() {
    this.report$ = this._store.select(reportSelector);
  }

}
