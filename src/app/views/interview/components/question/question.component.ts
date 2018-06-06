import { Component, OnInit, Input } from '@angular/core';
import { IQuestion } from '../../../../models/interview/question.model';
import { Store } from '@ngrx/store';
import { State } from '../../../../core/redux';
import { Observable } from 'rxjs';
import { selectors } from '../../../../core/redux/reducers/interview.reducers';
import { InterviewActionTypes } from '../../../../core/redux/actions/interview.actions';

@Component({
  selector: 'question',
  templateUrl: 'question.component.html'
})

export class QuestionComponent implements OnInit {
  @Input() question: IQuestion;

  isInfoVisible$: Observable<boolean>;

  constructor(private _store: Store<State>) { }

  ngOnInit() {
    this.isInfoVisible$ = this._store.select(selectors.isVisibleInfoSelector);
  }

  toggleInfoVisibility() {
    this._store.dispatch({
      type: InterviewActionTypes.ToggleMoreInfo,
    });
  }
}
