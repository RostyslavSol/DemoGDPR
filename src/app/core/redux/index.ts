import { ActionReducerMap } from '@ngrx/store';
import * as fromDashboard from './reducers/dashboard.reducers';
import * as fromSectionDetails from './reducers/section.details.reducers';
import * as fromCommon from './reducers/common.reducers';
import * as fromInterview from './reducers/interview.reducers';
import * as fromReport from './reducers/report.reducers';

export interface State {
  CommonState:          fromCommon.CommonState;
}

export const reducers: ActionReducerMap<State> = {
  CommonState:          fromCommon.reducer,
};
