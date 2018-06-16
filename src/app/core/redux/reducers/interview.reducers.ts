import { IQuestion } from "../../../models/interview/question.model";
import { InterviewAction, InterviewActionTypes, LoadQuestion, SubmitAnswer } from "../actions/interview.actions";
import { createFeatureSelector, createSelector, ActionReducer } from "@ngrx/store";
import { IAnswer } from "../../../models/interview/answer.model";
import { IAnswersPayload } from "../../../models/interview/answers.payload";

export interface InterviewState {
  isVisibleAdditionalInfo: boolean;
  submittedAnswers:        IAnswer[];
  question:                IQuestion;
  interviewPostPayload:    IAnswersPayload;
}

const initialState: InterviewState = {
  isVisibleAdditionalInfo: false,
  submittedAnswers: [],
  question: null,
  interviewPostPayload: null
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

export const reducer: ActionReducer<InterviewState> =
  (state: InterviewState, action: InterviewAction): InterviewState => {
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
        const payloadAnswer = (action as SubmitAnswer).payload;
        return {
          ...state,
          submittedAnswers: state.submittedAnswers ? [
            ...state.submittedAnswers,
            payloadAnswer
          ] : [payloadAnswer]
        };
    }
  };
