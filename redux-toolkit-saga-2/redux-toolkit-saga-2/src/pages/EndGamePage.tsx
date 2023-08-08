import { useAppSelector, useAppDispatch } from '../hooks/redux-hooks';

import { restartGame } from '../features/game/gameSlice';

import { Button } from '../components/Button/Button';

export const EndGamePage = () => {
  const dispatch = useAppDispatch();
  const score = useAppSelector((state) => state.quiz.score);
  const answers = useAppSelector((state) => state.quiz.answers);

  const restartHandler = () => {
    dispatch(restartGame());
  };
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl text-purple-500 my-4">Game Over</h1>
      <h2 className="text-2xl mb-4">
        Your score was <span className="text-purple-500">{score}</span> out of 10.
      </h2>
      <Button onClick={restartHandler}>Try Again</Button>
      <div className="mt-4 p-4">
        {answers.map((answer) => (
          <div
            key={answer.question}
            className="border-b-2 border-purple-500 flex justify-between bg-white"
          >
            <span
              dangerouslySetInnerHTML={{ __html: answer.question }}
              className="mr-4 p-2"
            ></span>
            <span
              className={`p-2 ${
                answer.isCorrectAnswer ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {answer.correctAnswer}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
