import { SagaIterator } from 'redux-saga';
import { takeEvery, all, call, put, takeLeading } from 'redux-saga/effects';

import { getPostsAPI, addPostAPI } from '../../posts/api';

import {
  getPosts,
  getPostsSuccess,
  getPostsError,
  addPost,
  addPostSuccess,
  addPostError,
} from './postsSlice';

import { Post, Post_Draft } from './../types/index';

const DEFAULT_ERROR_MESSAGE = 'Something went wrong.';

function* gestPostsSaga(): SagaIterator {
  try {
    const { data }: { data: Post[] } = yield call(getPostsAPI);
    yield put(getPostsSuccess(data));
  } catch (error) {
    if (error instanceof Error) {
      yield put(getPostsError(error.message));
    } else {
      yield put(getPostsError(DEFAULT_ERROR_MESSAGE));
    }
  }
}

function* addPostSaga({ payload }: { payload: Post_Draft }): SagaIterator {
  try {
    const { status } = yield call(addPostAPI, payload);
    if (status === 201) {
      yield put(addPostSuccess());
    }
  } catch (error) {
    if (error instanceof Error) {
      yield put(addPostError(error.message));
    } else {
      yield put(addPostError(DEFAULT_ERROR_MESSAGE));
    }
  }
}

function* getPostsWatcher(): SagaIterator {
  yield takeEvery(getPosts, gestPostsSaga);
}

function* addPostsWatcher(): SagaIterator {
  yield takeLeading(addPost, addPostSaga);
}

export function* postsSaga() {
  yield all([getPostsWatcher(), addPostsWatcher()]);
}
