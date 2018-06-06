import { createFeatureSelector, createSelector, ActionReducer } from '@ngrx/store';
import { ISection } from '../../../models/dashboard/section.model';
import { CommonAction, CommonActionTypes } from '../actions/select.section.action';

export interface CommonState {
  section: ISection;
}

const commonSelector = createFeatureSelector<CommonState>('CommonState');

export const sectionSelector = createSelector(
  commonSelector,
  (state: CommonState) => state ? state.section : null
);

export const reducer: ActionReducer<CommonState> =
  (state: CommonState, action: CommonAction): CommonState => {
    switch (action.type) {
      case CommonActionTypes.SelectSection:
        return {
          ...state,
          section: action.payload
        };
    }
  };
