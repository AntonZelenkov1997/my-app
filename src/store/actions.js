import { SEARCH_BAR_VALUE_OUT } from './redusers';

export const putSearchBarValue = (searchBarValue) => {
    return {
        type: SEARCH_BAR_VALUE_OUT,
        payload: searchBarValue
    }
}