import { useEffect } from "react";
import { useDispatch } from "react-redux";

import FiltersPanel from "./components/FiltersPanel"
import Header from "./components/Header"
import PlayersList from "./components/PlayersList";
import { addPlayers } from "./store/players/players-actions";

import data from './assets/data.json'

function App() {
  const dispatch = useDispatch();
  const shuffledPlayers = data.sort(() => Math.random() - 0.5);

  useEffect(() => {
    dispatch(addPlayers(shuffledPlayers));
  }, []);

  return (
    <div className="w-full h-full min-h-screen bg-gray-100 text-black font-spartan">
      <div className="container mx-auto">
        <Header />
        <FiltersPanel />
        <PlayersList />
      </div>
    </div>
  )
}

export default App
