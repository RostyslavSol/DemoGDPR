import { Component, OnInit, Input } from '@angular/core';
import { IQuestion } from '../../../../models/interview/question.model';

@Component({
  selector: 'question',
  templateUrl: 'question.component.html'
})

export class QuestionComponent implements OnInit {
  @Input() question: IQuestion;

  isInfoVisible = false;

  constructor() { }

  ngOnInit() { }

  toggleInfoVisibility() {
    this.isInfoVisible = !this.isInfoVisible;
  }
}
