import { StoreModule, ActionReducer } from "@ngrx/store";
import { reducers, State } from "./index";
import { environment } from "../../../environments/environment";

const storeLogger = () => (reducer) => (state, action) => {
  const nextState = reducer(state, action);

  console.log(action.type);

  return nextState;
};

export function logger(reducer: ActionReducer<State>): any {
  return storeLogger()(reducer);
}

export const metaReducers = environment.production ? [] : [logger];

export const AppStoreModule = StoreModule.forRoot(reducers,  {metaReducers});
