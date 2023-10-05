export const selectorAllPlayers = state => state.playersList;

export const selectorVisiblePlayers = (state, filters = []) => {
    if (filters.length === 0) return state.playersList;
    
    return state.playersList.filter((player) => {
        const playerFilters = [].concat(player.position, player.team, player.country, ...player.tags);
        return filters.every((filter) => playerFilters.includes(filter));
    })
}