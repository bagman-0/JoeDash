import { createTheme } from "@mui/material/styles";

// assets
import colors from "assets/scss/_themes-vars.module.scss";

// project imports
// import componentStyleOverrides from "./compStyleOverride";
import themePalette from "./palette";
import themeTypography from "./typography";
import chroma from "chroma-js";

/**
 * Represent theme style and structure as per Material-UI
 * @param {JsonObject} customization customization parameter object
 */
const transparency = (color, a) => chroma(color).alpha(a);
export const lendingTheme = {};

export const theme = (customization) => {
  const color = colors;
  console.log(customization);
  const themeOption = {
    colors: color,

    // dashBackground: color.dashBackground,
    dashAppBar: color.dashAppBar,
    heading: "#fff",
    // componentBg: chroma(theme.colors.defaultPrimary).alpha(0.7),

    // navbar color
    // paper: "rgb(121, 134, 203, 0.0)",
    backgroundDefault: "rgb(27, 18, 107, 1)",
    // paper background of main page content
    background: "rgb(121, 134, 203, 0.9)",
    darkTextPrimary: "#fff",
    darkTextSecondary: "#fff",
    textDark: "#fff",
    menuSelected: "#fff",
    menuSelectedBack: "#fff",
    divider: "#fff",
    fontFamily: '"Segoe UI"',
    customization
  };

  const themeOptions = {
    direction: "ltr",
    palette: themePalette(themeOption),
    mixins: {
      toolbar: {
        minHeight: "48px",
        padding: "16px",
        "@media (min-width: 600px)": {
          minHeight: "48px"
        }
      }
    },
    typography: themeTypography(themeOption),
    transparent: (c, a) => chroma(c).alpha(a),
    lightText: "rgb(255, 255, 255, 0.6)"
  };

  const themes = createTheme(themeOptions);
  // themes.components = componentStyleOverrides(themeOption);
  return themes;
};

export default theme;
