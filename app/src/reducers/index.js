import {FETCH_RUNE_START, FETCH_RUNE_SUCCESS, FETCH_RUNE_FAILURE} from '../actions'

const initialState = {
    
    isLoading: false,
    runeData: [],
    error: ''

}

export const reducer = (state = initialState, action) => {

    switch(action.type) {
        case FETCH_RUNE_START:
            return {
                ...state,
                isLoading: true,
            };
        case FETCH_RUNE_SUCCESS:
            return {
                ...state,
                runeData: action.payload,
                isLoading: false,
                error: ''
            };
        case FETCH_RUNE_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
            default:
                return state;
    };
};