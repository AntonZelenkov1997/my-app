export const SEARCH_BAR_VALUE_OUT = 'SEARCH_BAR_VALUE_OUT';

export const initialState = {
    searchBarValue: "Привет"
}

export const reducerSearchBarComponent = (state = initialState, action) => {
    switch(action.type) {
        case SEARCH_BAR_VALUE_OUT:
            return { ...state, searchBarValue: action.payload };
    }
    return state;
}