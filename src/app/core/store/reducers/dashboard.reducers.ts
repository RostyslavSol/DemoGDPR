import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { ISection } from '../../../models/dashboard/section.model';
import { DashboardActionTypes, DashboardAction } from '../actions/dashboard.actions';
import { Action, createSelector, createFeatureSelector } from '@ngrx/store';

export interface DashboardState {
  sections: ISection[];
}

const initialState: DashboardState = {
  sections: []
};

const dashboardFeatureSelector = createFeatureSelector<DashboardState>('dashboard');

export const sectionsSelector = createSelector(
  dashboardFeatureSelector,
  (state: DashboardState) => state.sections
);

export function reducer(
  state = initialState,
  action: DashboardAction
): DashboardState {
  switch (action.type) {
    case DashboardActionTypes.Load: {
      return {
        ...state,
        sections: action.payload
      };
    }
  }
}
