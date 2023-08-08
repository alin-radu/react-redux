export enum GAME_STAGES {
  START_GAME = 'START_GAME',
  GAME = 'GAME',
  FETCHING_GAME = 'FETCHING_GAME',
  END_GAME = 'END_GAME',
}

export type GAME_STAGES_OPTIONS =
  | GAME_STAGES.START_GAME
  | GAME_STAGES.GAME
  | GAME_STAGES.FETCHING_GAME
  | GAME_STAGES.END_GAME;

export type Answer_OPTIONS = 'False' | 'True';

export interface Question {
  category: string;
  correct_answer: Answer_OPTIONS;
  difficulty: 'easy' | 'medium' | 'hard';
  incorrect_answers: ['True', 'False'];
  question: string;
  type: 'boolean';
}

export interface Answer {
  question: string;
  answer: Answer_OPTIONS;
  correctAnswer: Answer_OPTIONS;
  isCorrectAnswer: boolean;
}
