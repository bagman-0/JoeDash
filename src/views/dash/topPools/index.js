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
  Typography
} from "@mui/material";

// project imports
// import BajajAreaChartCard from "../dashboard/Default/BajajAreaChartCard";
import MainCard from "ui-component/cards/MainCard";
import SkeletonPopularCard from "ui-component/cards/Skeleton/PopularCard";
import { gridSpacing } from "store/constant";

// assets
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
// import getJoeDayData from "./dash-data";
import TopRows from "./makeRows";
import { getPairs, getTokenPairs } from "../../../core/api";
import { getPools } from "../../../core/api/masterchef";

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const TopPools = ({ isLoading, data }) => {
  const theme = useTheme();
  console.log(data);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    // AnchorElement
    setAnchorEl(null);
  };
  // const [poolData, setPoolData] = useState([0]);

  console.log(data);

  return (
    <>
      {isLoading ? (
        <SkeletonPopularCard />
      ) : (
        <Paper sx={{ bgcolor: "#1b126b" }}>
          <CardContent>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12}>
                <Grid
                  container
                  alignContent="flex-end"
                  justifyContent="space-between"
                >
                  <Grid item>
                    <Typography variant="h4">Popular Pools</Typography>
                  </Grid>
                  <Grid item>
                    <MoreHorizOutlinedIcon
                      fontSize="small"
                      sx={{
                        color: theme.palette.primary[200],
                        cursor: "pointer"
                      }}
                      aria-controls="menu-popular-card"
                      aria-haspopup="true"
                      onClick={handleClick}
                    />
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
        </Paper>
      )}
    </>
  );
};

TopPools.propTypes = {
  isLoading: PropTypes.bool
};

export default TopPools;
