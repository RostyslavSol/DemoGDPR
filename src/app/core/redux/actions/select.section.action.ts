import { Action } from '@ngrx/store';
import { ISection } from '../../../models/dashboard/section.model';

export enum CommonActionTypes {
  SelectSection = '[Common] Select section'
}

export class SelectSection implements Action {
  type: string;

  constructor(public payload: ISection) {}
}

export type CommonAction =
  | SelectSection;
