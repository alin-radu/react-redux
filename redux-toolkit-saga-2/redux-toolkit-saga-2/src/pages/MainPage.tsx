import { useAppSelector } from '../hooks/redux-hooks';

import { StartGamePage } from './StartGamePage';
import { GamePage } from './GamePage';
import { FetchingGamePage } from './FetchingPage';
import { EndGamePage } from './EndGamePage';
import { GAME_STAGES } from '../utils/types';

export const MainPage = () => {
  const currentStage = useAppSelector((state) => state.game.stage);

  let displayedPage;
  switch (currentStage) {
    case GAME_STAGES.START_GAME:
      displayedPage = <StartGamePage />;
      break;
    case GAME_STAGES.FETCHING_GAME:
      displayedPage = <FetchingGamePage />;
      break;
    case GAME_STAGES.GAME:
      displayedPage = <GamePage />;
      break;
    case GAME_STAGES.END_GAME:
      displayedPage = <EndGamePage />;
      break;
    default:
      break;
  }

  return (
    <div className="font-mono bg-purple-50 min-h-screen ">
      <h1 className="bg-purple-500 text-white p-4 text-2xl text-center uppercase">
        Redux Saga Quiz Game
      </h1>
      {displayedPage}
    </div>
  );
};
