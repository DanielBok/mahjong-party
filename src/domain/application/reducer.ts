import AllActions from "@/domain/root-actions";
import produce from "immer";
import { getType } from "typesafe-actions";

import * as A from "./actions";
import * as T from "./types";

const defaultState: T.Store = {
  user: {
    id: "",
    name: "",
  },
  loading: {
    user: "SUCCESS",
  },
};

const AppReducer = (state = defaultState, action: AllActions) =>
  produce(state, (draft) => {
    switch (action.type) {
      case getType(A.fetchAppUser.request):
        draft.loading.user = "REQUEST";
        break;
      case getType(A.fetchAppUser.success):
        draft.loading.user = "SUCCESS";
        draft.user = action.payload;
        break;
      case getType(A.fetchAppUser.failure):
        draft.loading.user = "FAILURE";
        break;
    }
  });

export default AppReducer;
