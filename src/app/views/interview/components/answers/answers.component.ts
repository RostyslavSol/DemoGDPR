import { Component, OnInit, Input } from '@angular/core';
import { IAnswer } from '../../../../models/interview/answer.model';
import { Store } from '@ngrx/store';
import { State } from '../../../../core/redux';
import { InterviewActionTypes } from '../../../../core/redux/actions/interview.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'answers',
  templateUrl: 'answers.component.html'
})

export class AnswersComponent implements OnInit {
  @Input() sectionId: number;
  @Input() questionId: number;
  @Input() isLastQuestion: boolean;
  @Input() answers: IAnswer[];

  chosenAnswer: IAnswer;

  constructor(
    private _store: Store<State>,
    private _router: Router
  ) { }

  ngOnInit() {
    this.initRadioGroup();
  }

  initRadioGroup() {
    this.chosenAnswer = this.answers[0];
  }

  get btnText(): string {
    return this.isLastQuestion ? 'FINISH INTERVIEW' : 'SUBMIT ANSWER';
  }

  public submitAnswer(chosenAnswer: IAnswer): void {
    if (this.isLastQuestion) {
      // TODO: finish interview
      this._router.navigate(['/report', 1]);
    } else {
      this._store.dispatch({
        type:    InterviewActionTypes.SubmitAnswer,
        payload: chosenAnswer
      });

      this._router.navigate(['/interview', this.sectionId, this.questionId + 1]);
    }
  }
}
