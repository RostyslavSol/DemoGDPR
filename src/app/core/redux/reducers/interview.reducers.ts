import { IQuestion } from "../../../models/interview/question.model";
import { InterviewAnswers, InterviewAction, InterviewActionTypes, LoadQuestion, SubmitAnswer } from "../actions/interview.actions";
import { createFeatureSelector, createSelector, ActionReducer } from "@ngrx/store";

export interface InterviewState {
  isVisibleAdditionalInfo: boolean;
  submittedAnswers:        InterviewAnswers;
  question:                IQuestion;
}

const initialState: InterviewState = {
  isVisibleAdditionalInfo: false,
  submittedAnswers: [],
  question: null
};

const interviewFeatureSelector = createFeatureSelector<InterviewState>('InterviewState');

export const selectors = {
  questionSelector: createSelector(
    interviewFeatureSelector,
    (state: InterviewState) => state ? state.question : null
  ),
  isVisibleInfoSelector: createSelector(
    interviewFeatureSelector,
    (state: InterviewState) => state ? state.isVisibleAdditionalInfo : false
  ),
  submittedAnswersSelector: createSelector(
    interviewFeatureSelector,
    (state: InterviewState) => state ? state.submittedAnswers : []
  )
};

export const reducer: ActionReducer<InterviewState> = (
  state: InterviewState,
  action: InterviewAction
): InterviewState => {
  switch (action.type) {
    case InterviewActionTypes.ToggleMoreInfo:
      return {
        ...state,
        isVisibleAdditionalInfo: !state.isVisibleAdditionalInfo
      };

    case InterviewActionTypes.LoadQuestion:
      return {
        ...state,
        question: (action as LoadQuestion).payload
      };

    case InterviewActionTypes.SubmitAnswer:
      const payload = (action as SubmitAnswer).payload;
      return {
        ...state,
        submittedAnswers: state.submittedAnswers ? [
          ...state.submittedAnswers,
          payload
        ] : [payload]
      };

    case InterviewActionTypes.FinishInterview:
      return { ...state };
  }
};
