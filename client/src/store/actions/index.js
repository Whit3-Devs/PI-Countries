import axios from 'axios';
import { SET_COUNTRIES, SET_APP_LOADING } from './actionTypes';


// Esta funcion, es para tener la forma del dispatch, que va a ser interna de los actions
function setCountries(payload) {
    return {
        type: SET_COUNTRIES,
        payload: payload
    }
}

export const getCountriesFromAPI = () => (dispatch) => {
    dispatch(setAppLoading(true))
    return axios.get('https://restcountries.com/v3/all').then(response => {
        const [data] = response;
        console.log(data)
        dispatch(setCountries(data));
        dispatch(setAppLoading(false))
    });
};


export function clearCharacters() {
    return (dispatch) => {
        dispatch(setCountries([]))
    }
}


// APP LOADING

function setAppLoading(payload) {
    return {
        type: SET_APP_LOADING,
        payload: payload
    }
}