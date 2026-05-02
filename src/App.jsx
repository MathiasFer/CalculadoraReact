import { useState } from "react"; 
import Home from "./pages/Home";
import App1 from "./pages/App1";
import App2 from "./pages/App2";
import App3 from "./pages/App3";
import Detail from "./pages/Detail";

function App (){
  const [screen, setScreen] = useState("home");
  const [selectedAnime, setSelectedAnime] = useState(null);

  return(
    <div className="min-h-screen bg-gray-50 p-6">
      
      {/* container */}
      <div className="w-full max-w-[1600px] mx-auto bg-white shadow-md rounded-lg p-6">
        {screen === "home" && (
          <Home goTo={setScreen}/>
        )}

        {screen === "app1" && (
          <App1 goHome={() => setScreen("home")} />
        )}

        {screen === "app2" && (
          <App2 goHome={() => setScreen("home")} />
        )}

        {screen === "app3" && (
          <App3 
            goHome={() => setScreen("home")}
            goDetail={(anime)=>{
              setSelectedAnime(anime);
              setScreen("detail");
            }}
          />
        )}

        {screen === "detail" && (
          <Detail
            anime={selectedAnime}
            goBack={() => setScreen("app3")}
          />
        )}

      </div>
    </div>
  );
}

export default App;