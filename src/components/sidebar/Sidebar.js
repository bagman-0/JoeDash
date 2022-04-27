import PropTypes from "prop-types";

// material-ui
import { useTheme } from "@mui/material/styles";
import { Box, Drawer, Typography, useMediaQuery } from "@mui/material";

// third-party
import PerfectScrollbar from "react-perfect-scrollbar";
import { BrowserView, MobileView } from "react-device-detect";

// project imports
// import MenuList from "./MenuList";
import NavGroup from "./NavGroup";
import menuItem from "menu-items";
import LogoSection from "../LogoSection";
import { drawerWidth } from "store/constant";
import chroma from "chroma-js";
// ==============================|| SIDEBAR DRAWER ||============================== //
const MenuList = () => {
  const navItems = menuItem.items.map((item) => {
    switch (item.type) {
      case "group":
        return <NavGroup key={item.id} item={item} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  return <>{navItems}</>;
};
const Sidebar = ({ drawerOpen, drawerToggle, window }) => {
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));

  const drawer = (
    <>
      <BrowserView style={{ background: "transparent", scroll: "false" }}>
        <PerfectScrollbar
          component="div"
          style={{
            height: !matchUpMd ? "calc(100vh - 56px)" : "calc(100vh - 88px)",
            paddingLeft: "16px",
            paddingRight: "16px"
          }}
        >
          <MenuList />
        </PerfectScrollbar>
      </BrowserView>
      <MobileView>
        <Box sx={{ px: 2 }}>
          <MenuList />
        </Box>
      </MobileView>
    </>
  );
  // `linear-gradient(to  bottom right, ${chroma
  // .scale(["#006bff", "#3000be"])
  // .mode("lch")
  // .colors(7)} );`
  const container =    window !== undefined ? () => window.document.body : undefined;
  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { md: 0 },
        width: matchUpMd ? drawerWidth : "auto",
        background: "transparent"
      }}
      aria-label="mailbox folders"
    >
      <Drawer
        container={container}
        variant={matchUpMd ? "persistent" : "temporary"}
        anchor="left"
        open={drawerOpen}
        onClose={drawerToggle}
        // color="transparent"
        sx={{
          "& .MuiDrawer-paper": {
            // drawer width from constants
            width: drawerWidth,
            background: "transparent",
            borderRight: "none",
            [theme.breakpoints.up("md")]: {
              top: "17vh"
            },
            pr: 3
          }
        }}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

Sidebar.propTypes = {
  drawerOpen: PropTypes.bool,
  drawerToggle: PropTypes.func,
  window: PropTypes.object
};

export default Sidebar;
