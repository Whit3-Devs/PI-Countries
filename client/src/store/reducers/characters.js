import { SET_COUNTRIES } from "../actions/actionTypes";

const initialState = []

export default function characters(state=initialState, {type, payload}) {
  switch (type) {
    case SET_CHARACTERS:
      return payload;
    default:
      return state;
  }
}