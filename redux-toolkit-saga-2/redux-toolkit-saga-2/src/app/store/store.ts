import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';

import { rootReducer } from './reducer';
import { rootSaga } from './saga';

const configureStoreWithMiddlewares = (initialState = {}): EnhancedStore => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    preloadedState: initialState,
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: false }).prepend(sagaMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export const store = configureStoreWithMiddlewares();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
