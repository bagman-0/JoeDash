import PropTypes from "prop-types";
import { useState, useEffect } from "react";

// material-ui
import { useTheme, styled } from "@mui/material/styles";
import { Avatar, Box, Button, Grid, Typography } from "@mui/material";

// third-party
import Chart from "react-apexcharts";

// project imports
import MainCard from "ui-component/cards/MainCard";
import SkeletonTotalOrderCard from "ui-component/cards/Skeleton/EarningCard";

import ChartDataMonth from "./chart-data/total-order-month-line-chart";
import ChartDataYear from "./chart-data/total-order-year-line-chart";

// assets
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import getJoeDayData from "../../dash/dash-data";

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: "#fff",
  overflow: "hidden",
  position: "relative",
  margin: theme.spacing(1),
  "&>div": {
    position: "relative",
    zIndex: 5
  },
  "&:after": {
    content: '""',
    position: "absolute",
    width: 175,
    height: 175,
    background: theme.palette.primary[800],
    borderRadius: "50%",
    zIndex: 1,
    top: -85,
    right: -95,
    [theme.breakpoints.down("sm")]: {
      top: -105,
      right: -140
    }
  },
  "&:before": {
    content: '""',
    position: "absolute",
    zIndex: 1,
    width: 1000,
    height: 210,
    background: theme.palette.primary[800],
    borderRadius: "50%",
    top: -125,
    right: -15,
    opacity: 0.5,
    [theme.breakpoints.down("sm")]: {
      top: -155,
      right: -70
    }
  }
}));

// ==============================|| DASHBOARD - TOTAL ORDER LINE CHART CARD ||============================== //

const TotalOrderLineChartCard2 = ({ isLoading }, data) => {
  const theme = useTheme();
  const [chartData, setChartData] = useState([0]);

  const [timeValue, setTimeValue] = useState(false);
  const handleChangeTime = (event, newValue) => {
    setTimeValue(newValue);
  };
  useEffect(() => {
    async function getData() {
      const d = await getJoeDayData("joe");

      setChartData(d);
    }
    getData();
  }, []);
  // console.log(chartData);

  // Do some stuff to get price data
  // skeleton card is placeholder on load

  //  #mc to open up material ui colors
  // hit tab to add <> and close html element
  return (
    <>
      {isLoading ? (
        <SkeletonTotalOrderCard />
      ) : (
        <CardWrapper border={false} content={false}>
          <Box sx={{ padding: 1.9, width: 125, height: 50 }}>
            <Grid container alignItems="center">
              <Grid item xs={5}>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: theme.palette.primary[200]
                  }}
                >
                  JOE
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography sx={{ fontSize: "1rem" }}>
                  {chartData[chartData.length - 1].priceUSD}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </CardWrapper>
      )}
    </>
  );
};

TotalOrderLineChartCard2.propTypes = {
  isLoading: PropTypes.bool
};

export default TotalOrderLineChartCard2;
