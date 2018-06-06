import { createSelector, createFeatureSelector, ActionReducer } from '@ngrx/store';
import { SectionDetailsAction, SectionDetailsActionTypes } from '../actions/section.details.actions';
import { ISectionDetails } from '../../../models/section.details/section.details.model';

export interface SectionDetailsState {
  details: ISectionDetails;
}

const sectionDetailsFeatureSelector = createFeatureSelector<SectionDetailsState>('SectionDetailsState');

export const sectionDetailsSelector = createSelector(
  sectionDetailsFeatureSelector,
  (state: SectionDetailsState) => state ? state.details : null
);

export const reducer: ActionReducer<SectionDetailsState> =
  (state: SectionDetailsState, action: SectionDetailsAction): SectionDetailsState => {
    switch (action.type) {
      case SectionDetailsActionTypes.LoadSectionDetails:
        return {
          ...state,
          details: action.payload
        };
    }
  };
