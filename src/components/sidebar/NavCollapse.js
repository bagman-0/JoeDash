import PropTypes from "prop-types";
import { useState } from "react";
import { useSelector } from "react-redux";

// material-ui
import { useTheme } from "@mui/material/styles";
import {
  Collapse,
  Link,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography
} from "@mui/material";

// project imports

import NavItem from "./NavItem";

// assets
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { IconChevronDown, IconChevronUp } from "@tabler/icons";

// ==============================|| SIDEBAR MENU LIST COLLAPSE ITEMS ||============================== //

const NavCollapse = ({ menu, level }) => {
  const theme = useTheme();
  const customization = useSelector((state) => state.customization);

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleClick = () => {
    setOpen(!open);
    setSelected(!selected ? menu.id : null);
  };
  // menu collapse & item
  const menus = menu.children?.map((item) => {
    switch (item.type) {
      case "collapse":
        return <NavCollapse key={item.id} menu={item} level={level + 1} />;
      case "item":
        return <NavItem key={item.id} item={item} level={level + 1} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  return (
    <>
      <ListItemButton
        sx={{
          varient: "h1",
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
          pl: `${level * 40}px`,
          "& .MuiListItemButton": {
            boxSizing: "border-box",
            width: "100%",
            position: "absolute",
            backgroundSize: "cover",
            backgroundPosition: "center center"
          }
        }}
        selected={selected === menu.id}
        onClick={handleClick}
      >
        <ListItemText
          primary={(
            <Link href={menu.url} underline="none" color="inherit" variant="h2">
              {menu.title}
            </Link>
          )}
        />
        {open ? (
          <IconChevronUp
            stroke={1.5}
            size="2rem"
            style={{ marginTop: "auto", marginBottom: "auto" }}
          />
        ) : (
          <IconChevronDown
            stroke={1.5}
            size="2rem"
            style={{ marginTop: "auto", marginBottom: "auto" }}
          />
        )}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          component="div"
          disablePadding
          sx={{
            position: "relative",
            "&:after": {
              content: "''",
              position: "absolute",

              top: 0,
              height: "100%",

              opacity: 1,
              background: theme.palette.default?.secondary
            }
          }}
        >
          {menus}
        </List>
      </Collapse>
    </>
  );
};

NavCollapse.propTypes = {
  menu: PropTypes.object,
  level: PropTypes.number
};

export default NavCollapse;
