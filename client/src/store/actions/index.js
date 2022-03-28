import axios from 'axios';
import { GET_COUNTRIES_API, GET_COUNTRIES_SEARCH, SET_LOADING, SORT_COUNTRIES_POPULATION, SORT_COUNTRIES_ALPHABET, FILTER_COUNTRIES_CONTINENT, FILTER_COUNTRIES_ACTIVITIES, GET_ACTIVITIES_API } from './actionTypes';



export function getCountriesFromAPI() {
    return function(dispatch) {
        dispatch(setLoading(true));
        axios.get("http://localhost:3001/api/countries")
        .then((countries) => {
            dispatch(setCountries(countries.data))
            dispatch(setLoading(false));
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

export function searchCountries(search) {
    return function(dispatch) {
        dispatch(setLoading(true));
        axios.get("http://localhost:3001/api/countries?name=" + search)
        .then((characters) => {
            dispatch({
                type: GET_COUNTRIES_SEARCH,
                payload: characters
            })
            dispatch(setLoading(false));
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

function setCountries(payload){
    return {
        type: GET_COUNTRIES_API,
        payload
    }
}

function setLoading(payload) {
    return {
        type: SET_LOADING,
        payload: payload
    }
}

export function sortPopulation(typeOrder) {
    return {
        type: SORT_COUNTRIES_POPULATION,
        payload: typeOrder
    }
}

export function sortAlphabet(typeOrder) {
    return {
        type: SORT_COUNTRIES_ALPHABET,
        payload: typeOrder
    }
}

export function filterContinent(typeFilter) {
    return {
        type: FILTER_COUNTRIES_CONTINENT,
        payload: typeFilter
    }
}

export function filterActivities(typeFilter) {
    return {
        type: FILTER_COUNTRIES_ACTIVITIES,
        payload: typeFilter
    }
}

export function getActivitiesFromAPI() {
    return function(dispatch) {
        axios.get("http://localhost:3001/api/activities")
        .then((activities) => {
            dispatch(setActivities(activities.data))
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

function setActivities(payload){
    return {
        type: GET_ACTIVITIES_API,
        payload
    }
}