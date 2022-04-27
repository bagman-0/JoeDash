// project imports
import config from "config";

// import { SWITCH_THEME } from "./reducer";
// import themes from theme.js
// action - state management
import * as actionTypes from "./actions";
// reducers take a state and an action

export const initialState = {
  yomama: true,
  isOpen: [], // for active default menu

  opened: true,
  theme: "default"
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //
const SWITCH_THEME = "SWITCH_THEME";
const lendTheme = {
  dashAppBar: "green",
  heading: "#green",
  // componentBg: chroma(theme.colors.defaultPrimary).alpha(0.7),

  // navbar color
  // paper: "rgb(121, 134, 203, 0.0)",
  backgroundDefault: "rgb(27, 18, 107, 1)",
  // paper background of main page content
  background: "green",
  darkTextPrimary: "#fff",
  darkTextSecondary: "#fff"
};
const themeReducer = (state = initialState, action) => {
  let id;
  console.log(action);
  switch (action.type) {
    case actionTypes.SWITCH_THEME:
      id = action.id;

      return {
        ...state,
        isOpen: [id],
        theme: lendTheme
      };

    case actionTypes.SET_MENU:
      return {
        ...state,
        opened: action.opened
      };
    default:
      return state;
  }
};

export default themeReducer;
