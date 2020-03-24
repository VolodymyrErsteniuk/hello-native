import { takeLatest, all, call, put } from 'redux-saga/effects';
import { DATA_REQUEST } from '../redux/actionTypes';
import { requestDataSuccess } from '../redux/actionCreators';

function* _dataRequest() {
  const response = yield call('someApi');

  yield put(requestDataSuccess(response));
}

export default function* root() {
  yield all([takeLatest(DATA_REQUEST, _dataRequest)]);
}
