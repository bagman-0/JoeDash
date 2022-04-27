import { combineReducers } from "redux";

// reducer import
import themeReducer from "./customizationReducer";
// import
// ==============================|| COMBINE REDUCER ||============================== //
// reducers take a state and an action
export const SWITCH_THEME = "SWITCH_THEME";
export const switchTheme = (theme) => (dispatch) => dispatch({ type: SWITCH_THEME, theme });
const reducer = combineReducers({
  customization: themeReducer
});

export default reducer;
