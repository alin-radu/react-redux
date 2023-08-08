import { all, take, call, put, delay, fork } from 'typed-redux-saga/macro';

import { registerUser, loginUser, logoutUser } from './../api/index';

import {
  authError,
  authStart,
  authSuccess,
  logoutError,
  logoutStart,
  logoutSuccess,
} from './authSlice';
import { Auth_Form } from './../types/index';

function* authenticate(payload: Auth_Form) {
  const { email, password, isRegister } = payload;

  try {
    let data;
    if (isRegister) {
      data = yield* call(registerUser, { email, password });
    } else {
      data = yield* call(loginUser, { email, password });
    }
    yield* put(authSuccess(data.user.email));

    return data.user.uid as string;
  } catch (error) {
    if (error instanceof Error) {
      yield* put(authError(error.message));
    } else {
      yield* put(authError('Something went wrong.'));
    }
  }
}

function* logout() {
  console.log('%c-> developmentConsole: logout===> ', 'color:#77dcfd');
  try {
    yield* call(logoutUser);
    yield* put(logoutSuccess());
  } catch (error) {
    if (error instanceof Error) {
      yield* put(logoutError(error.message));
    } else {
      yield* put(logoutError('Something went wrong.'));
    }
  }
}

function* longRunningYield() {
  yield* delay(10000);
  console.log(
    '%c-> developmentConsole: longRunningYield.................> HI',
    'color:#77dcfd'
  );
}

function* authFlow() {
  console.log('%c-> developmentConsole: authFlow==============> ', 'color:#77dcfd');
  while (true) {
    const { payload }: { payload: Auth_Form } = yield* take(authStart);
    console.log('%c-> developmentConsole: authFlow===>1 ', 'color:#77dcfd');
    const uid = yield* call(authenticate, payload);
    yield* fork(longRunningYield);
    console.log('%c-> developmentConsole: authFlow===>2 ', 'color:#77dcfd');
    if (uid) {
      console.log('%c-> developmentConsole: authFlow===>3 ', 'color:#77dcfd');
      yield* take(logoutStart);
      yield* call(logout);
    }
  }
}

export function* authSaga() {
  yield* all([authFlow()]);
}
