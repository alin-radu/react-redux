import { all } from 'typed-redux-saga/macro';

import { gameSaga } from '../../features/game/gameSaga';
import { quizSaga } from '../../features/quiz/quizSaga';

export function* rootSaga() {
  yield* all([gameSaga(), quizSaga()]);
}
