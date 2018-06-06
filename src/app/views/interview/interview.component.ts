import { Component, OnInit } from '@angular/core';
import { IQuestion } from '../../models/interview/question.model';
import { Store } from '@ngrx/store';
import { State } from '../../core/redux';
import { selectors } from '../../core/redux/reducers/interview.reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-interview',
  templateUrl: 'interview.component.html'
})

export class InterviewComponent implements OnInit {
  question$: Observable<IQuestion>;

  constructor(
    private _store: Store<State>
  ) { }

  ngOnInit() {
    this.question$ = this._store.select(selectors.questionSelector);
  }
}
