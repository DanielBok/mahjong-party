import { RootState } from "./root-state";
import { combineReducers } from "redux";
import { AppReducer } from "./application";

const rootReducer = combineReducers<RootState>({
  app: AppReducer,
});

export default rootReducer;
