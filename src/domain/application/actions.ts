import { createAsyncAction } from "typesafe-actions";
import * as T from "./types";

export const fetchAppUser = createAsyncAction(
  "FETCH_APP_USER_REQUEST",
  "FETCH_APP_USER_SUCCESS",
  "FETCH_APP_USER_FAILURE"
)<void, T.AppUser, void>();
