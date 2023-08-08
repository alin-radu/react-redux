import {
  take,
  fork,
  put,
  call,
  delay,
  cancel,
  all,
  FixedTask,
} from 'typed-redux-saga/macro';

import { fetchQuizAPI } from './gameApi';

import { fetchQuestionsError, fetchQuestionsSuccess } from '../quiz/quizSlice';
import { cancelGame, startGame } from './gameSlice';

import { Question } from './../../utils/types';

function* fetchQuestionsSaga() {
  try {
    yield* delay(1000);
    const data: Question[] = yield* call(fetchQuizAPI);
    yield* put(fetchQuestionsSuccess(data));
  } catch (error) {
    yield* put(fetchQuestionsError('Something went wrong.'));
  }
}

function* cancelFetchQuestionsSaga(forkedSaga: FixedTask<void>) {
  while (true) {
    yield* take(cancelGame.type);
    yield* cancel(forkedSaga);
  }
}

function* startGameSaga() {
  while (true) {
    yield* take(startGame.type);
    const forkedSaga = yield* fork(fetchQuestionsSaga);
    yield* fork(cancelFetchQuestionsSaga, forkedSaga);
  }
}

export function* gameSaga() {
  yield* all([startGameSaga()]);
}
