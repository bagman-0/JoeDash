import PropTypes from "prop-types";
import { useState, useEffect } from "react";

// material-ui
import { useTheme, alpha, styled } from "@mui/material/styles";
import {
  Avatar,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Card,
  Grid,
  Box,
  Menu,
  Paper,
  MenuItem,
  Typography,
  useMediaQuery
} from "@mui/material";

// project imports
// import BajajAreaChartCard from "../dashboard/Default/BajajAreaChartCard";
// import MainCard from "ui-component/cards/MainCard";
import SkeletonPopularCard from "./SkeletonComponents/PopularCard";
import { gridSpacing } from "store/constant";

// assets
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

// import getJoeDayData from "./dash-data";
import TopRows from "./TopRows";
import PerfectScrollbar from "react-perfect-scrollbar";
// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //
import NavigationScroll from "./subcomponents/NavigationScroll";

const TopPools = ({ isLoading, data }) => {
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    // AnchorElement
    setAnchorEl(null);
  };
  // const [poolData, setPoolData] = useState([0]);

  return (
    <>
      {isLoading ? (
        <SkeletonPopularCard />
      ) : (
        <NavigationScroll>
          <Box
            sx={{
              bgcolor: theme
                .transparent(theme.palette.default.primary, 0.7)
                .hex()
            }}
          >
            <Typography variant="h4">Popular Pools</Typography>
            <Box
              height="500"
              sx={{
                overflow: "hidden",
                height: 500
                // position: "relative",
                // overflowY: "scroll"
              }}
            >
              <CardContent>
                <Grid container spacing={gridSpacing}>
                  <Grid item xs={12}>
                    <Grid
                      container
                      alignContent="flex-end"
                      justifyContent="space-between"
                    >
                      <Grid item>
                        <MoreHorizOutlinedIcon
                          fontSize="large"
                          sx={{
                            // this component is the three dots dropdown
                            color: theme.palette.default?.secondary,
                            cursor: "pointer"
                          }}
                          aria-controls="menu-popular-card"
                          aria-haspopup="true"
                          onClick={handleClick}
                        />
                        {/* "<!-- menu selector options -->" */}
                        <Menu
                          id="menu-popular-card"
                          anchorEl={anchorEl}
                          keepMounted
                          open={Boolean(anchorEl)}
                          onClose={handleClose}
                          variant="selectedMenu"
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right"
                          }}
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "right"
                          }}
                        >
                          <MenuItem onClick={handleClose}> Daily</MenuItem>
                          <MenuItem onClick={handleClose}> Monthly</MenuItem>
                          <MenuItem onClick={handleClose}> Yearly </MenuItem>
                        </Menu>
                      </Grid>
                    </Grid>
                    <TopRows rows={data} />
                    <Divider sx={{ my: 1.5 }} />
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions sx={{ p: 1.25, pt: 0, justifyContent: "center" }}>
                <Button size="small" disableElevation>
                  View All
                  <ChevronRightOutlinedIcon />
                </Button>
              </CardActions>
            </Box>
          </Box>
        </NavigationScroll>
      )}
    </>
  );
};

TopPools.propTypes = {
  isLoading: PropTypes.bool
};

export default TopPools;
