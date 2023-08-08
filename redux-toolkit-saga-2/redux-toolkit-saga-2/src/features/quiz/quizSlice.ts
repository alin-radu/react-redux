import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Question, Answer_OPTIONS, Answer } from './../../utils/types';

interface QuizState {
  questions: Question[];
  score: number;
  currentQuestionIndex: number;
  answers: Answer[];
  error: null | string;
}

const initialState: QuizState = {
  questions: [],
  score: 0,
  currentQuestionIndex: 0,
  answers: [],
  error: null,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    fetchQuestionsSuccess: (state, action: PayloadAction<Question[]>) => {
      state.questions = action.payload;
      state.score = 0;
      state.currentQuestionIndex = 0;
      state.answers = [];
    },
    fetchQuestionsError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    answerQuestion: (state, action: PayloadAction<Answer_OPTIONS>) => {
      // check current question
      const currentQuestion = state.questions[state.currentQuestionIndex];
      const isCorrectAnswer = action.payload === currentQuestion.correct_answer;

      // update the score
      state.score += isCorrectAnswer ? 1 : 0;
      state.answers.push({
        question: currentQuestion.question,
        answer: action.payload,
        correctAnswer: currentQuestion.correct_answer,
        isCorrectAnswer: isCorrectAnswer,
      });
    },
    nextQuestion: (state) => {
      state.currentQuestionIndex++;
    },
  },
});

export const {
  fetchQuestionsSuccess,
  fetchQuestionsError,
  answerQuestion,
  nextQuestion,
} = quizSlice.actions;

export const quizReducer = quizSlice.reducer;
