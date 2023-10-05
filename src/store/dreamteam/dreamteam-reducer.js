import { ADD_PLAYER_DREAMTEAM, REMOVE_PLAYER_DREAMTEAM, CLEAR_PLAYERS_DREAMTEAM } from "./dreamteam-actions";

export const dreamteamReducer = (state = [{nickname: "Carry"}, {nickname: "Mid"}, {nickname: "Offlane"}, {nickname: "Soft support"}, {nickname: "Hard support"}], action) => {
    switch (action.type) {
        case ADD_PLAYER_DREAMTEAM: {
            if (state.includes(action.player)) return state;
            switch(action.player.position) {
                case 'Carry': {
                    const newState = [...state];
                    newState[0] = action.player;
                    return newState;
                }
                
                case 'Mid': {
                    const newState = [...state];
                    newState[1] = action.player;
                    return newState;
                }

                case 'Offlane': {
                    const newState = [...state];
                    newState[2] = action.player;
                    return newState;
                }

                case 'Soft support': {
                    const newState = [...state];
                    newState[3] = action.player;
                    return newState;
                }

                case 'Hard support': {
                    const newState = [...state];
                    newState[4] = action.player;
                    return newState;
                }
            }
            return [...state, action.player];
        }
        case REMOVE_PLAYER_DREAMTEAM: {
            switch(action.player.position) {
                case 'Carry': {
                    const newState = [...state];
                    newState[0] = {nickname: 'Carry'};
                    return newState;
                }
                
                case 'Mid': {
                    const newState = [...state];
                    newState[1] = {nickname: 'Mid'};
                    return newState;
                }

                case 'Offlane': {
                    const newState = [...state];
                    newState[2] = {nickname: 'Offlane'};
                    return newState;
                }

                case 'Soft support': {
                    const newState = [...state];
                    newState[3] = {nickname: 'Soft support'};
                    return newState;
                }

                case 'Hard support': {
                    const newState = [...state];
                    newState[4] = {nickname: 'Hard support'};
                    return newState;
                }
            }
            return state;
        }
        case CLEAR_PLAYERS_DREAMTEAM: return [];
        default: return state;
    }
};