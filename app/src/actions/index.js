import axios from 'axios';

// async action creator
export const FETCH_RUNE_START = 'FETCH_RUNE_START';
export const FETCH_RUNE_SUCCESS = 'FETCH_RUNE_SUCCESS';
export const FETCH_RUNE_FAILURE = 'FETCH_RUNE_FAILURE';

export const fetchRune = (dispatch) => {
        // tell the reducer we are going to enter a 'loading state'
        dispatch({ type: FETCH_RUNE_START });

        // start the fetch
        axios
           .get('https://api.osrsbox.com/weapons')
           .then((res) => {
               // send the reducer the data
               console.log(res.data._items);
               dispatch({ type: FETCH_RUNE_SUCCESS, payload: res.data._items});
           })
           .catch((err) => {
               // send the reducer the error message
               dispatch({ type: FETCH_RUNE_FAILURE, payload: err.message });
           });
};