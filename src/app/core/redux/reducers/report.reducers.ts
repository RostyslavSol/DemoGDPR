import { IReport } from "../../../models/report/report.model";
import { createFeatureSelector, createSelector, ActionReducer } from "@ngrx/store";
import { ReportAction, ReportActionTypes } from "../actions/report.actions";

export interface ReportState {
  report: IReport;
}

const initialState: ReportState = {
  report: null
};

const reportFeatureSelector = createFeatureSelector<ReportState>('ReportState');

export const reportSelector = createSelector(
  reportFeatureSelector,
  (state: ReportState) => state ? state.report : null
);

export const reducer: ActionReducer<ReportState> =
  (state: ReportState, action: ReportAction): ReportState => {
    switch (action.type) {
      case ReportActionTypes.LoadReport:
        return {
          ...state,
          report: action.payload
        };
    }
  };
