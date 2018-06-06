import { Action } from "@ngrx/store";
import { ISection } from "../../../models/dashboard/section.model";

export enum DashboardActionTypes {
  LoadSections = '[Dashboard] Load Sections'
}

export class LoadSections implements Action {
  type: string;

  constructor(public payload: ISection[]) {}
}

export type DashboardAction = LoadSections;
