import { ISectionDetails } from "../../../models/section.details/section.details.model";
import { Action } from "@ngrx/store";

export enum SectionDetailsActionTypes {
  LoadSectionDetails = '[SectionDetails] Load section details',
  StartInterview = '[SectionDetails] Start interview'
}

export class LoadSectionDetails implements Action {
  type: string;

  constructor(public payload: ISectionDetails) {}
}

export type SectionDetailsAction =
  | LoadSectionDetails;
