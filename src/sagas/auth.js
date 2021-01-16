import { put } from "redux-saga/effects";
import * as actionTypes from "../store/actions/actionTypes";

export function* logoutSaga(action) {
  yield localStorage.removeItem("token");
  yield localStorage.removeItem("expirationDate");
  yield localStorage.removeItem("userId");
  yield put({ type: actionTypes.AUTH_UNAUTHENTICATE });
}
