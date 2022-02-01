import PropTypes from "prop-types";
import { forwardRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import chroma from "chroma-js";
// material-ui
import { useTheme } from "@mui/material/styles";
import bigjoe from "../../../../../assets/images/joes/bigjoe.jpeg";
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

// ==============================|| SIDEBAR MENU LIST ITEMS ||============================== //

const NavItem = ({ item, level }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const customization = useSelector((state) => state.customization);
  const matchesSM = useMediaQuery(theme.breakpoints.down("lg"));

  const Icon = item.icon;
  const itemIcon = item?.icon ? (
    <Icon stroke={1.5} size="1.8rem" />
  ) : (
    <FiberManualRecordIcon
      sx={{
        width:
          customization.isOpen.findIndex((id) => id === item?.id) > -1 ? 8 : 6,
        height:
          customization.isOpen.findIndex((id) => id === item?.id) > -1 ? 8 : 6
      }}
      fontSize={level > 0 ? "inherit" : "medium"}
    />
  );

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
  // box-shadow: rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px;
  // rgb(136, 14, 79, 0.4) -2.5px 2.5px, rgb(136, 14, 79, 0.4) 2.5px 2.5px, rgb(136, 14, 79, 0.4) -2.5px -2.5px, rgb(136, 14, 79, 0.4) 2.5px -2.5px,
  // "linear-gradient(to top, #2414b5, #880e4f)",
  // "radial-gradient(#2414b5, #880e4f)",

  // boxShadow: `rgb(136, 14, 79, 0.4) -2.5px 2.5px, rgb(136, 14, 79, 0.4) 2.5px 2.5px, rgb(136, 14, 79, 0.4) -2.5px -2.5px, rgb(136, 14, 79, 0.4) 2.5px -2.5px,
  //    rgb(134, 0, 105, 0.35) -5px 5px, rgb(134, 0, 105, 0.35) 5px 5px, rgb(134, 0, 105, 0.35) -5px -5px, rgb(134, 0, 105, 0.35) 5px -5px,
  //    rgb(114, 0, 140, 0.2) -7.5px 7.5px, rgb(114, 0, 140, 0.2) 7.5px 7.5px, rgb(114, 0, 140, 0.2) -7.5px -7.5px, rgb(114, 0, 140, 0.2) 7.5px -7.5px,
  //    rgb(36, 20, 181, 0.1) -10px 10px, rgb(36, 20, 181, 0.1) 10px 10px, rgb(36, 20, 181, 0.1) -10px -10px, rgb(36, 20, 181, 0.1) 10px -10px`,

  const grad = chroma.scale(["#fafa6e", "#2A4858"]).mode("lch").colors(6);
  // const x = `linear-gradient(to top, ${grad})`;
  // import Logo from "../../../../../ui-component/Logo";

  console.log(grad);
  return (
    <ListItemButton
      {...listItemProps}
      disabled={item.disabled}
      sx={{
        borderRadius: `0px`,
        "&:hover": {
          boxShadow: "0px 0px 10px 5px rgb(121, 134, 203, 0.8)",
          backgroundColor: "rgb(121, 134, 203, 0.8) !important"
        },
        mb: 0.5,
        alignItems: "flex-start",
        // "rgb(121, 134, 203, 0.3)",

        border: "3px solid rgb(121, 134, 203, 0.5)",

        py: level > 1 ? 1 : 3,
        pl: `${level * 25}px`,
        "& .MuiListItemButton": {
          boxSizing: "border-box",
          width: "100%",
          backgroundImage: `url(${bigjoe})`,
          position: "absolute",
          backgroundSize: "cover",
          backgroundPosition: "center center"
        }
      }}
      selected={customization.isOpen.findIndex((id) => id === item.id) > -1}
      onClick={() => {
        itemHandler(item.id);
      }}
    >
      <ListItemIcon
        sx={{ color: "#fff", my: "auto", minWidth: !item?.icon ? 18 : 36 }}
      >
        {itemIcon}
      </ListItemIcon>
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
      {item.chip && (
        <Chip
          color={item.chip.color}
          variant={item.chip.variant}
          size={item.chip.size}
          label={item.chip.label}
          avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
        />
      )}
    </ListItemButton>
  );
};

NavItem.propTypes = {
  item: PropTypes.object,
  level: PropTypes.number
};

export default NavItem;
