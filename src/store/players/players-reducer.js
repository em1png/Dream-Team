import { ADD_PLAYERS } from "./players-actions";

export const playersReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_PLAYERS: return action.players;
        default: return state;
    }
};