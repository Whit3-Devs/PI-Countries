import { SET_APP_LOADING } from "../actions/actionTypes";

const initialState = {
    loading: false
}

export default function app(state=initialState, {type, payload}) {
  switch (type) {
    case SET_APP_LOADING:
      return {...state, loading: payload}
    default:
      return state;
  }
}