import { useSelector } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { useMemo, createContext, useState } from "react";
// routing
import Routes from "routes";

// defaultTheme
import themes from "themes";

// project imports
import NavigationScroll from "./components/subcomponents/NavigationScroll";

// ==============================|| APP ||============================== //
// can import a store and use provider from react redux tag
// importing the store gives whole app access to the store
// then you can import themes and actions and use useSelector to access reducer states

// dispatch can be used to dispatch actions
// reducers take state and action to make a change
// this.props.location.pathname?
const ThemeContext = createContext({
  theme: "dark",
  setTheme: () => {}
});
// function BaseTheme(...props) {
//   const { theme, setTheme } = useContext(ThemeContext);
//   const theme1 = createTheme({
//     palette: { mode: theme }
//   });
//
//   console.log(`Current Theme - ${JSON.stringify(theme)}`);
//   return (
//     <>
//       <ThemeProvider theme={theme1}>{props.children}</ThemeProvider>
//     </>
//   );
// }
const getDesignTokens = (mode) => {
  if (mode === "light ") {
    return {
      // palette values for light mode
      primary: "green",
      divider: "green",
      text: {
        primary: "green",
        secondary: "green"
      }
    };
  }
  if (mode === "lending") {
    return {
      // palette values for dark mode
      primary: "deepOrange",
      divider: "deepOrange",
      background: {
        default: "deepOrange",
        paper: "deepOrange"
      },
      text: {
        primary: "#fff"
      }
    };
  }
  return "eee";
};
// const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
const ThemeChooser = (current) => {
  const page = true;
};
const App = () => {
  const customization = useSelector((state) => state.customization);
  const [mode, setMode] = useState("dash");
  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      }
    }),
    []
  );
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />

        <NavigationScroll>
          <Routes />
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
