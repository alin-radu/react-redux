import { combineReducers } from 'redux';

import { gameReducer } from '../../features/game/gameSlice';
import { quizReducer } from './../../features/quiz/quizSlice';

export const rootReducer = combineReducers({ game: gameReducer, quiz: quizReducer });
