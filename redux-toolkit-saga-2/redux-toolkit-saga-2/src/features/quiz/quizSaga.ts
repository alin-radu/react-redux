import { take, race, delay, put, fork, cancel } from 'typed-redux-saga/macro';

import { fetchQuestionsSuccess, answerQuestion, nextQuestion } from './quizSlice';
import { cancelGame, finishGame, restartGame } from '../game/gameSlice';

function* answersSaga() {
  for (let i = 0; i < 10; i++) {
    yield* take(answerQuestion.type);
    yield* put(nextQuestion());
  }
}

export function* quizGameSaga() {
  while (true) {
    yield* take(fetchQuestionsSuccess.type);
    yield* race({
      delay: delay(10000),
      done: answersSaga(),
    });

    yield* put(finishGame());
  }
}

export function* quizSaga() {
  const bgSyncTask = yield* fork(quizGameSaga);
  yield* take([restartGame.type, cancelGame.type]);
  yield* cancel(bgSyncTask);
}
