import { ActionReducerMap } from '@ngrx/store';
import * as fromDashboard from './reducers/dashboard.reducers';
import * as fromSectionDetails from './reducers/section.details.reducers';
import * as fromCommon from './reducers/common.reducers';
import * as fromInterview from './reducers/interview.reducers';
import * as fromReport from './reducers/report.reducers';

export interface State {
  CommonState:          fromCommon.CommonState;
  DashboardState:       fromDashboard.DashboardState;
  SectionDetailsState:  fromSectionDetails.SectionDetailsState;
  InterviewState:       fromInterview.InterviewState;
  ReportState:          fromReport.ReportState;
}

export const reducers: ActionReducerMap<State> = {
  CommonState:          fromCommon.reducer,
  DashboardState:       fromDashboard.reducer,
  SectionDetailsState:  fromSectionDetails.reducer,
  InterviewState:       fromInterview.reducer,
  ReportState:          fromReport.reducer
};
