import { useState } from 'react';
import { useAppDispatch } from '../hooks/redux-hooks';

import { startGame } from '../features/game/gameSlice';

import { Button } from '../components/Button/Button';

export const StartGamePage = () => {
  const dispatch = useAppDispatch();

  const [userName, setUserName] = useState('');

  const startGameHandler = () => {
    dispatch(startGame(userName));
  };

  return (
    <div className="flex flex-col justify-center items-center mt-80">
      <input
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Your Name..."
        className="py-2 px-4 outline-none rounded shadow w-64 mb-6"
      />
      <Button onClick={startGameHandler}>Start Game</Button>
    </div>
  );
};
