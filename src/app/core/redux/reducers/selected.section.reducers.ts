import { createFeatureSelector, createSelector, ActionReducer } from '@ngrx/store';
import { ISection } from '../../../models/dashboard/section.model';
import { SelectSection, SelectSectionType } from '../actions/select.section.action';

const sectionFeatureSelector = createFeatureSelector<ISection>('SectionState');

export const sectionSelector = createSelector(
  sectionFeatureSelector,
  (state: ISection) => state
);

export const reducer: ActionReducer<ISection> = (
  state: ISection,
  action: SelectSection
): ISection => {
  switch (action.type) {
    case SelectSectionType:
      return action.payload;
  }
};
