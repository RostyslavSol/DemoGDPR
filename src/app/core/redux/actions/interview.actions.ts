import { Action } from '@ngrx/store';
import { IQuestion } from '../../../models/interview/question.model';
import { IAnswer } from '../../../models/interview/answer.model';
import { IAnswersPayload } from '../../../models/interview/answers.payload';

export enum InterviewActionTypes {
  ToggleMoreInfo  = '[Interview] Toggle more info',
  LoadQuestion    = '[Interview] Load question',
  SubmitAnswer    = '[Interview] Submit answer'
}

export class ToggleMoreInfo implements Action {
  type: string;
}

export class LoadQuestion implements Action {
  type: string;
  constructor(public payload: IQuestion) {}
}

export class SubmitAnswer implements Action {
  type: string;
  constructor(public payload: IAnswer) {}
}

export type InterviewAction =
  | ToggleMoreInfo
  | LoadQuestion
  | SubmitAnswer;
