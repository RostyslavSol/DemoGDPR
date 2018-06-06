import { ActionReducerMap } from '@ngrx/store';
import { ISection } from '../../models/dashboard/section.model';
import * as fromDashboard from './reducers/dashboard.reducers';
import * as fromSectionDetails from './reducers/section.details.reducers';
import * as fromSelectedSection from './reducers/selected.section.reducers';
import * as fromInterview from './reducers/interview.reducers';
import * as fromReport from './reducers/report.reducers';

export interface State {
  SectionState:         ISection;
  DashboardState:       fromDashboard.DashboardState;
  SectionDetailsState:  fromSectionDetails.SectionDetailsState;
  InterviewState:       fromInterview.InterviewState;
  ReportState:          fromReport.ReportState;
}

export const reducers: ActionReducerMap<State> = {
  SectionState:         fromSelectedSection.reducer,
  DashboardState:       fromDashboard.reducer,
  SectionDetailsState:  fromSectionDetails.reducer,
  InterviewState:       fromInterview.reducer,
  ReportState:          fromReport.reducer
};
