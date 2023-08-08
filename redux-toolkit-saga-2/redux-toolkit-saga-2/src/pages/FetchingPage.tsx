import { cancelGame } from '../features/game/gameSlice';

import { Button } from '../components/Button/Button';

import { useAppDispatch } from '../hooks/redux-hooks';

export const FetchingGamePage = () => {
  const dispatch = useAppDispatch();
  const cancelGameHandler = () => {
    dispatch(cancelGame());
  };

  return (
    <div className="flex flex-col justify-center items-center mt-80">
      <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-12">
        <div className="w-12 h-12 bg-purple-200 rounded-full animate-bounce "></div>
      </div>
      <Button onClick={cancelGameHandler}>Cancel</Button>
    </div>
  );
};
