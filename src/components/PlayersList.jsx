import { useSelector } from "react-redux";
import PlayerCard from "./PlayerCard";
import { selectorVisiblePlayers } from "../store/players/players-selectors";
import { selectorFilters } from "../store/filters/filters-selectors";

const PlayersList = () => {
  const readyFilters = useSelector(selectorFilters);
  const players = useSelector(state => selectorVisiblePlayers(state, readyFilters));

  return (
    <div>
      {players.map(player => <PlayerCard key={player.id} {...player} />)}
    </div>
  )
}

export default PlayersList