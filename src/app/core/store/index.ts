import { ActionReducerMap } from "@ngrx/store";
import * as fromDashboard from './reducers/dashboard.reducers';
import * as fromSectionDetails from './reducers/section.details.reducers';
import { DashboardState } from "./reducers/dashboard.reducers";
import { SectionDetailsState } from "./reducers/section.details.reducers";

export interface State {
  dashboard: DashboardState;
  sectionDetails: SectionDetailsState;
}

export const reducers: ActionReducerMap<State> = {
  dashboard: fromDashboard.reducer,
  sectionDetails: fromSectionDetails.reducer
};
