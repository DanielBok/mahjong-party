import { AxiosResponse } from "axios";
import * as A from "./actions";
import { put, call, all, takeLatest } from "redux-saga/effects";
import * as T from "./types";
import api from "@/infra/api";

function* retrieveUser() {
  try {
    const { data }: AxiosResponse<T.AppUser> = yield call(api.get, "self");

    yield put(A.fetchAppUser.success(data));
  } catch (e) {
    yield put(A.fetchAppUser.failure());
  }
}

export default function* rootAppSaga() {
  yield all([takeLatest(A.fetchAppUser.request, retrieveUser)]);
}
