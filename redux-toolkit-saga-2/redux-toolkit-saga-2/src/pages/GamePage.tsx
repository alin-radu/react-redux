import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks/redux-hooks';

import { finishGame } from '../features/game/gameSlice';
import { answerQuestion } from '../features/quiz/quizSlice';

import { Button } from '../components/Button/Button';

import { Answer_OPTIONS } from '../utils/types';

export const GamePage = () => {
  const dispatch = useAppDispatch();
  const [timeLeft, setTimeLeft] = useState(60);
  const question = useAppSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex].question
  );
  const score = useAppSelector((state) => state.quiz.score);
  const currentIndex = useAppSelector((state) => state.quiz.currentQuestionIndex);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const answerHandler = (answer: Answer_OPTIONS) => {
    dispatch(answerQuestion(answer));
  };

  const restartHandler = () => {
    dispatch(finishGame());
  };

  return (
    <>
      <div className="flex flex-col items-center relative">
        <p className="h-20 w-20 flex justify-center items-center border-8 border-purple-500 rounded-full my-4 text-3xl text-purple-500">
          {timeLeft}
        </p>
        <p className="absolute top-4 left-4 text-2xl text-purple-500">{score}</p>
        <p className="absolute top-4 right-4 text-2xl text-purple-500">
          {currentIndex}/10
        </p>
        <p
          dangerouslySetInnerHTML={{ __html: question }}
          className="p-7 bg-white rounded shadow "
        ></p>
        <div className="flex justify-between w-96 mt-8">
          <Button onClick={() => answerHandler('True')}>True</Button>
          <Button onClick={() => answerHandler('False')}>False</Button>
        </div>
      </div>
      <div className="absolute bottom-4 right-4">
        <Button onClick={restartHandler} type="reset">
          Quit Game
        </Button>
      </div>
    </>
  );
};
