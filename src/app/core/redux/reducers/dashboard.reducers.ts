import { createFeatureSelector, createSelector, ActionReducer } from '@ngrx/store';
import { ISection } from '../../../models/dashboard/section.model';
import { DashboardAction, DashboardActionTypes, LoadSections } from '../actions/dashboard.actions';

export interface DashboardState {
  sections: ISection[];
}

const initialState: DashboardState = {
  sections: []
};

const dashboardFeatureSelector = createFeatureSelector<DashboardState>('DashboardState');

export const sectionsSelector = createSelector(
  dashboardFeatureSelector,
  (state: DashboardState) => state ? state.sections : []
);

export const reducer: ActionReducer<DashboardState> =
  (state: DashboardState, action: DashboardAction): DashboardState => {
    switch (action.type) {
      case DashboardActionTypes.LoadSections:
        return {
          ...state,
          sections: action.payload
        };
    }
  };
