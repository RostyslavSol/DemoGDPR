import { Action } from '@ngrx/store';
import { IQuestion } from '../../../models/interview/question.model';
import { IAnswer } from '../../../models/interview/answer.model';

export type InterviewAnswers = IAnswer[];

export enum InterviewActionTypes {
  ToggleMoreInfo  = '[Interview] Toggle more info',
  LoadQuestion    = '[Interview] Load question',
  SubmitAnswer    = '[Interview] Submit answer',
  FinishInterview = '[Interview] Finish'
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

export class FinishInterview implements Action {
  type: string;
  constructor(public payload: InterviewAnswers) {}
}

export type InterviewAction =
  | ToggleMoreInfo
  | LoadQuestion
  | SubmitAnswer
  | FinishInterview;
