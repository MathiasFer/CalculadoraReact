import { useState } from "react";

import HomePage from "./pages/HomePage";
import SimpleCalculatorPage from "./pages/SimpleCalculatorPage";
import CalculatorPage from "./pages/CalculatorPage";
import AnimePage from "./pages/AnimeSearchPage";
import DetailAnimePage from "./pages/DetailAnimePage";

import type { Anime } from "./types/anime";
import { SCREENS, type Screen } from "./types/screen";

function App() {
  const [screen, setScreen] = useState<Screen>(SCREENS.HOME);
  const [selectedAnime, setSelectedAnime] = useState<Anime | null>(null);

  return (
    <div className="w-full min-h-screen bg-gray-100">
      <div className="mx-auto w-full max-w-6xl p-6">

        {screen === SCREENS.HOME && (
          <HomePage goTo={setScreen} />
        )}

        {screen === SCREENS.SIMPLE && (
          <SimpleCalculatorPage goHome={() => setScreen(SCREENS.HOME)} />
        )}

        {screen === SCREENS.CALCULATOR && (
          <CalculatorPage goHome={() => setScreen(SCREENS.HOME)} />
        )}

        {screen === SCREENS.ANIME && (
          <AnimePage
            goHome={() => setScreen(SCREENS.HOME)}
            goDetail={(anime) => {
              setSelectedAnime(anime);
              setScreen(SCREENS.DETAIL);
            }}
          />
        )}

        {screen === SCREENS.DETAIL && (
          <DetailAnimePage
            anime={selectedAnime}
            goBack={() => setScreen(SCREENS.ANIME)}
          />
        )}

      </div>
    </div>
  );
}

export default App;