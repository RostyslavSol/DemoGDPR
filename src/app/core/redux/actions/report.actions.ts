import { Action } from "@ngrx/store";
import { IReport } from "../../../models/report/report.model";

export enum ReportActionTypes {
  LoadReport = '[Report] Load report for section'
}

export class LoadReport implements Action {
  type: string;
  constructor(public payload: IReport) {}
}

export type ReportAction =
  | LoadReport;
