import { Component, OnInit, Input } from '@angular/core';
import { IAnswer } from '../../../../models/interview/answer.model';

@Component({
  selector: 'answers',
  templateUrl: 'answers.component.html'
})

export class AnswersComponent implements OnInit {
  @Input() answers: IAnswer[];

  chosenAnswer: IAnswer;

  constructor() { }

  ngOnInit() {
    this.chosenAnswer = this.answers[0];
  }
}
