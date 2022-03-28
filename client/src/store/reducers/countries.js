import { ASCENDANT, A_Z } from "../../constants/sort";
import { GET_COUNTRIES_API, GET_COUNTRIES_SEARCH, SORT_COUNTRIES_POPULATION, SORT_COUNTRIES_ALPHABET, FILTER_COUNTRIES_CONTINENT, FILTER_COUNTRIES_ACTIVITIES } from "../actions/actionTypes";

const initialState = {
    countries: [],
    filteredCountries: []
}

export default function countries(state = initialState, {type, payload}){
    switch (type) {
        case GET_COUNTRIES_API:
            return {
                ...state,
                countries: payload,
                filteredCountries: payload
            }
        case GET_COUNTRIES_SEARCH:
            return {
                ...state,
                filteredCountries: payload.data
            }
        case SORT_COUNTRIES_POPULATION:
            let orderedPopulation = [...state.countries]

            orderedPopulation = orderedPopulation.sort((a, b) => {
                if(a.population < b.population) {
                    return payload === ASCENDANT ? -1 : 1;
                }
                if(a.population > b.population) {
                    return payload === ASCENDANT ? 1 : -1;
                }
                return 0;
            })

            return {
                ...state,
                filteredCountries: orderedPopulation
            }
        case SORT_COUNTRIES_ALPHABET:
            let orderedAlphabet = [...state.countries]

            orderedAlphabet = orderedAlphabet.sort((a, b) => {
                if(a.name < b.name) {
                    return payload === A_Z ? -1 : 1;
                }
                if(a.name > b.name) {
                    return payload === A_Z ? 1 : -1;
                }
                return 0;
            })

            return {
                ...state,
                filteredCountries: orderedAlphabet
            }
        case FILTER_COUNTRIES_CONTINENT:
            let filteredContinent = [];
            state.countries.map((country) => {
                if(country.continent === payload) {
                    filteredContinent.push(country)
                }
            })
            return {
                ...state,
                filteredCountries: filteredContinent
            }
        case FILTER_COUNTRIES_ACTIVITIES:
            let filteredActivities = [];
            state.countries.map((country) => {
                country.Activities.map((acitvity) => {
                    if(acitvity.name === payload) {
                        filteredActivities.push(country);
                    }
                })
            })
            return {
                ...state,
                filteredCountries: filteredActivities
            }
        default:
            return state;
    }
}