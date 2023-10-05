export const ADD_PLAYER_DREAMTEAM = 'ADD_PLAYER_DREAMTEAM';
export const REMOVE_PLAYER_DREAMTEAM = 'REMOVE_PLAYER_DREAMTEAM';
export const CLEAR_PLAYERS_DREAMTEAM = 'CLEAR_PLAYERS_DREAMTEAM';

export const addDreamteam = (player) => ({
    type: ADD_PLAYER_DREAMTEAM,
    player,
});

export const removeDreamteam = (player) => ({
    type: REMOVE_PLAYER_DREAMTEAM,
    player,
});

export const clearDreamteam = {
    type: CLEAR_PLAYERS_DREAMTEAM
};