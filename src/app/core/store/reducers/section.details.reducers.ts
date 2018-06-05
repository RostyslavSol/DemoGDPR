import { createSelector, createFeatureSelector } from '@ngrx/store';
import { SectionDetailsAction, SectionDetailsActionTypes } from '../actions/section.details.actions';
import { ISectionDetails } from '../../../models/section.details/section.details.model';

export interface SectionDetailsState {
  sectionId: number;
  sectionDetails: ISectionDetails;
}

const initialState: SectionDetailsState = {
  sectionId: -1,
  sectionDetails: null
};

const sectionDetailsFeatureSelector = createFeatureSelector<SectionDetailsState>('sectionDetails');

export const sectionDetailsSelector = createSelector(
  sectionDetailsFeatureSelector,
  (state: SectionDetailsState) => state.sectionDetails
);

export function reducer(
  state: SectionDetailsState = initialState,
  action: SectionDetailsAction
): SectionDetailsState {
  switch (action.type) {
    case SectionDetailsActionTypes.LoadSectionDetails:
      return {
        ...state,
        sectionDetails: action.payload
      };

    case SectionDetailsActionTypes.StartInterview:
      return {
        ...state,
        sectionId: action.payload.sectionId
      };
  }
}
