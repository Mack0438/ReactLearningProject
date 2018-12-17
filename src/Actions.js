import { CHANGE_SEARCHFIELD } from "./Constants.js";

export const setSearchField = text => ({
  type: CHANGE_SEARCHFIELD,
  payload: text
});
