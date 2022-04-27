import PropTypes from "prop-types";
import { forwardRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import chroma from "chroma-js";
// material-ui
import { useTheme } from "@mui/material/styles";
import bigjoe from "../../assets/images/joes/bigjoe.jpeg";
import {
  Avatar,
  Chip,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Paper,
  useMediaQuery
} from "@mui/material";

// project imports
import { MENU_OPEN, SET_MENU } from "store/actions";
import config from "config";

// assets
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";

// ==============================|| SIDEBAR MENU LIST ITEMS ||============================== //

const NavItem = ({ item, level }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const customization = useSelector((state) => state.customization);
  const matchesSM = useMediaQuery(theme.breakpoints.down("lg"));

  let itemTarget = "_self";
  if (item.target) {
    itemTarget = "_blank";
  }

  let listItemProps = {
    component: forwardRef((props, ref) => (
      <Link
        ref={ref}
        {...props}
        to={`${config.basename}${item.url}`}
        target={itemTarget}
      />
    ))
  };
  if (item?.external) {
    listItemProps = { component: "a", href: item.url, target: itemTarget };
  }

  const itemHandler = (id) => {
    dispatch({ type: MENU_OPEN, id });
    if (matchesSM) dispatch({ type: SET_MENU, opened: false });
  };

  // active menu item on page load
  useEffect(() => {
    const currentIndex = document.location.pathname
      .toString()
      .split("/")
      .findIndex((id) => id === item.id);
    if (currentIndex > -1) {
      dispatch({ type: MENU_OPEN, id: item.id });
    }
    // eslint-disable-next-line
  }, []);
  return (
    <ListItemButton
      {...listItemProps}
      disabled={item.disabled}
      sx={{
        borderRadius: `0px`,
        "&:hover": {
          boxShadow: `0px 0px 10px 5px rgb(121, 134, 203, 0.5)`,
          backgroundColor: "rgb(121, 134, 203, 1) !important"
        },
        mb: 0.5,
        justifyContent: "center", // "rgb(121, 134, 203, 0.3)",
        // (${theme.palette.default?.primary})

        border: "3px solid rgb(121, 134, 203, 0.5)",

        py: level > 1 ? 1 : 3,
        pl: `${level * 25}px`,
        "& .MuiListItemButton": {
          boxSizing: "border-box",
          width: "100%",
          position: "absolute",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundImage: `url(${bigjoe})`
        }
      }}
      selected={customization.isOpen.findIndex((id) => id === item.id) > -1}
      onClick={() => {
        itemHandler(item.id);
      }}
    >
      <ListItemText
        primary={(
          <Typography
            variant={
              customization.isOpen.findIndex((id) => id === item.id) > -1
                ? "h2"
                : "h2"
            }
            color="rgb(250, 250, 250, 0.5)"
            sx={{
              "&:hover": {
                color: "rgb(250, 250, 250, 0.9) !important"
              }
            }}
          >
            {item.title}
          </Typography>
        )}
        secondary={
          item.caption && (
            <Typography
              variant="caption"
              sx={{ ...theme.typography.subMenuCaption }}
              display="block"
              gutterBottom
            >
              {item.caption}
            </Typography>
          )
        }
      />
    </ListItemButton>
  );
};

NavItem.propTypes = {
  item: PropTypes.object,
  level: PropTypes.number
};

export default NavItem;
