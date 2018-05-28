import { DashboardState } from "./reducers/dashboard.reducers";
import { ActionReducerMap } from "@ngrx/store";

import * as fromDashboard from './reducers/dashboard.reducers';

export interface State {
  dashboard: DashboardState;
}

export const reducers: ActionReducerMap<State> = {
  dashboard: fromDashboard.reducer
};
