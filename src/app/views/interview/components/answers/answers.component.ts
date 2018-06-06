import { Component, OnInit, Input } from '@angular/core';
import { IAnswer } from '../../../../models/interview/answer.model';
import { Store } from '@ngrx/store';
import { State } from '../../../../core/redux';
import { InterviewActionTypes } from '../../../../core/redux/actions/interview.actions';

@Component({
  selector: 'answers',
  templateUrl: 'answers.component.html'
})

export class AnswersComponent implements OnInit {
  @Input() answers: IAnswer[];

  chosenAnswer: IAnswer;

  constructor(
    private _store: Store<State>
  ) { }

  ngOnInit() {
    this.initRadioGroup();
  }

  initRadioGroup() {
    this.chosenAnswer = this.answers[0];
  }

  public submitAnswer(chosenAnswer: IAnswer): void {
    this._store.dispatch({
      type:    InterviewActionTypes.SubmitAnswer,
      payload: chosenAnswer
    });
  }
}
