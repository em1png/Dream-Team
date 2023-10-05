import { ADD_FILTER, REMOVE_FILTER, CLEAR_FILTER } from "./filters-actions";

export const filtersReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_FILTER: {
            if (state.includes(action.filter)) return state;

            const roles = ['Carry', 'Mid', 'Offlane', 'Soft support', 'Hard support']
            const country = ['Russia', 'Ukraine', 'Moldova', 'Belarus']

            if(roles.includes(action.filter)) {
                let newArray = [...state];
                newArray[0] = action.filter;
                return newArray;
            }

            if(country.includes(action.filter)) {
                let newArray = [...state];
                newArray[1] = action.filter;
                return newArray;
            }
            return [...state, action.filter];
        }
        case REMOVE_FILTER: {
            const roles = ['Carry', 'Mid', 'Offlane', 'Soft support', 'Hard support']
            const country = ['Russia', 'Ukraine', 'Moldova', 'Belarus']

            if(roles.includes(action.filter)) {
                let newArray = [...state];
                newArray[0] = '';
                return newArray;
            }

            if(country.includes(action.filter)) {
                let newArray = [...state];
                newArray[1] = '';
                return newArray;
            }

            return state.filter((item) => item !== action.filter);
        }
        case CLEAR_FILTER: return [];
        default: return state;
    }
};