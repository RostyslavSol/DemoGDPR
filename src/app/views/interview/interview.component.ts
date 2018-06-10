import { Component, OnInit } from '@angular/core';
import { IQuestion } from '../../models/interview/question.model';
import { Store } from '@ngrx/store';
import { State } from '../../core/redux';
import { selectors } from '../../core/redux/reducers/interview.reducers';
import { Observable, of } from 'rxjs';
import { ISection } from '../../models/dashboard/section.model';
import { sectionSelector } from '../../core/redux/reducers/common.reducers';

@Component({
  selector: 'app-interview',
  templateUrl: 'interview.component.html'
})

export class InterviewComponent implements OnInit {
  question$: Observable<IQuestion>;
  section$: Observable<ISection>;

  constructor(
    private _store: Store<State>
  ) { }

  ngOnInit() {
    this.question$ = this._store.select(selectors.questionSelector);
    this.section$  = of({ sectionId: 1 } as ISection);
  }
}
