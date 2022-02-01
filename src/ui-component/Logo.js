// material-ui
import { useTheme } from "@mui/material/styles";
import joecoinz from "../assets/images/joes/joe coinz block.png";
/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  const theme = useTheme();

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={logo} alt="Berry" width="100" />
     *
     */
    <img src={joecoinz} width="100" alt="joecoinz" />
  );
};

export default Logo;
