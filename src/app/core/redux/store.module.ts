import { StoreModule, ActionReducer } from '@ngrx/store';
import { reducers, State } from './index';
import { environment } from '../../../environments/environment';

import * as fromDashboard from './reducers/dashboard.reducers';
import * as fromSectionDetails from './reducers/section.details.reducers';
import * as fromInterview from './reducers/interview.reducers';
import * as fromReport from './reducers/report.reducers';

const storeLogger = (reducer) => (state, action) => {
  const nextState = reducer(state, action);

  console.log(action.type);

  return nextState;
};

export function logger(reducer: ActionReducer<State>): any {
  return storeLogger(reducer);
}

export const metaReducers = environment.production ? [] : [logger];


export const DashboardStoreModule      = StoreModule.forFeature('DashboardState', fromDashboard.reducer);
export const SectionDetailsStoreModule = StoreModule.forFeature('SectionDetailsState', fromSectionDetails.reducer);
export const InterviewStoreModule      = StoreModule.forFeature('InterviewState', fromInterview.reducer);
export const ReportStoreModule         = StoreModule.forFeature('ReportState', fromReport.reducer);

export const AppStoreModule            = StoreModule.forRoot(reducers,  {metaReducers});
