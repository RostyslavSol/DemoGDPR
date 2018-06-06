import { Action } from "@ngrx/store";
import { ISection } from "../../../models/dashboard/section.model";

export const SelectSectionType = '[App] Select section';

export class SelectSection implements Action {
  type: string;

  constructor(public payload: ISection) {}
}
