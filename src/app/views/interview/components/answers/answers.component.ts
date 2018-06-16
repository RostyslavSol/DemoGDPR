import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { IAnswer } from '../../../../models/interview/answer.model';
import { Store } from '@ngrx/store';
import { State } from '../../../../core/redux';
import { InterviewActionTypes } from '../../../../core/redux/actions/interview.actions';
import { Router } from '@angular/router';
import { selectors } from '../../../../core/redux/reducers/interview.reducers';
import { IAnswersPayload } from '../../../../models/interview/answers.payload';
import { ApiFactoryService } from '../../../../core/services/api.factory/api.factory.service';
import { tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'answers',
  templateUrl: 'answers.component.html'
})

export class AnswersComponent implements OnInit, OnDestroy {
  @Input() sectionId: number;
  @Input() questionId: number;
  @Input() isLastQuestion: boolean;
  @Input() answers: IAnswer[];

  chosenAnswer: IAnswer;

  selectSubscription: Subscription;
  redirectSubscription: Subscription;

  constructor(
    private _store: Store<State>,
    private _router: Router,
    private _apiService: ApiFactoryService
  ) { }

  ngOnInit() {
    this.initRadioGroup();
  }

  ngOnDestroy() {
    if (this.selectSubscription) { this.selectSubscription.unsubscribe(); }
    if (this.redirectSubscription) { this.redirectSubscription.unsubscribe(); }
  }

  initRadioGroup() {
    this.chosenAnswer = this.answers[0];
  }

  get btnText(): string {
    return this.isLastQuestion ? 'FINISH INTERVIEW' : 'SUBMIT ANSWER';
  }

  public submitAnswer(chosenAnswer: IAnswer): void {
    if (this.chosenAnswer) {
      if (this.isLastQuestion) {
        this.submitRegularAnswer(chosenAnswer);

        this.finishTheInterview();
      } else {
        this.submitRegularAnswer(chosenAnswer);

        this._router.navigate(['/interview', this.sectionId, this.questionId + 1]);
      }

      this.chosenAnswer = null;
    }
  }

  private submitRegularAnswer(chosenAnswer: IAnswer): void {
    this._store.dispatch({
      type:    InterviewActionTypes.SubmitAnswer,
      payload: chosenAnswer
    });
  }

  private finishTheInterview(): void {
    this.selectSubscription = this._store
      .select(selectors.submittedAnswersSelector)
      .subscribe((storeAnswers: IAnswer[]) => {
        if (storeAnswers && storeAnswers.length > 0) {
          this.redirectSubscription = this._apiService
            .postAnswers(this.sectionId, storeAnswers)
            .subscribe(() => this._router.navigate(['/report', 1]));
        }
      });
  }
}
