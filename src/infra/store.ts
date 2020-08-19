import rootReducer from "@/domain/root-reducer";
import rootSaga from "@/domain/root-saga";
import { RootState } from "@/domain/root-state";
import { useSelector } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { isEqual } from "lodash";

const sagaMiddleware = createSagaMiddleware();

function configureStore() {
  const middleware = composeWithDevTools(applyMiddleware(sagaMiddleware));

  const store = createStore(rootReducer, middleware);
  sagaMiddleware.run(rootSaga);

  return store;
}

const store = configureStore();
export default store;

export const useRootSelector = <TSelected = unknown>(
  selector: (s: RootState) => TSelected,
  equalityFn: (left: TSelected, right: TSelected) => boolean = isEqual
) => useSelector(selector, equalityFn);
