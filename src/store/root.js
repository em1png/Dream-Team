import { combineReducers } from "redux";
import { filtersReducer } from "./filters/filters-reducer";
import { playersReducer } from "./players/players-reducer";
import { dreamteamReducer } from "./dreamteam/dreamteam-reducer";

export const allReducers = combineReducers({filtersList: filtersReducer, playersList: playersReducer, dreamteamList: dreamteamReducer});