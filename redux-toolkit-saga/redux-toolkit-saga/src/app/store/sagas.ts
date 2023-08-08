import { all } from 'redux-saga/effects';
import { authSaga } from '../../features/auth/redux/authSaga';

import { postsSaga } from '../../features/posts/redux/postsSaga';

export function* rootSaga() {
  yield all([postsSaga(), authSaga()]);
}
