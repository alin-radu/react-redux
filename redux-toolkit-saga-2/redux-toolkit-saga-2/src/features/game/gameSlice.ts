import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchQuestionsSuccess, fetchQuestionsError } from '../quiz/quizSlice';

import { GAME_STAGES, GAME_STAGES_OPTIONS } from '../../utils/types';

interface GameState {
  stage: GAME_STAGES_OPTIONS;
  username: string;
}

const initialState: GameState = {
  stage: GAME_STAGES.START_GAME,
  username: '',
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startGame: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
      state.stage = GAME_STAGES.FETCHING_GAME;
    },
    cancelGame: (state) => {
      state.stage = GAME_STAGES.START_GAME;
    },
    finishGame: (state) => {
      state.stage = GAME_STAGES.END_GAME;
    },
    restartGame: (state) => {
      state.stage = GAME_STAGES.START_GAME;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchQuestionsSuccess, (state) => {
        state.stage = GAME_STAGES.GAME;
      })
      .addCase(fetchQuestionsError, (state) => {
        state.stage = GAME_STAGES.START_GAME;
      });
  },
});

export const { startGame, cancelGame, finishGame, restartGame } = gameSlice.actions;

export const gameReducer = gameSlice.reducer;
