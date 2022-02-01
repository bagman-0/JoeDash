import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// material-ui
import { useTheme } from "@mui/material/styles";
import { Card, Grid, Typography } from "@mui/material";
import MainCard from "ui-component/cards/MainCard";
// third-party
import ApexCharts from "apexcharts";
import Chart from "react-apexcharts";

// project imports
import getJoeDayData from "./chart-data/bajaj-area-chart";

// ===========================|| DASHBOARD DEFAULT - BAJAJ AREA CHART CARD ||=========================== //

const BajajAreaChartCard = () => {
  const [chartData, setChartData] = useState([0]);
  const theme = useTheme();
  const customization = useSelector((state) => state.customization);
  const { navType } = customization;

  const orangeDark = theme.palette.secondary[800];

  useEffect(() => {
    const newSupportChart = {
      colors: [orangeDark],
      tooltip: {
        theme: "light"
      }
    };

    ApexCharts.exec(`support-chart`, "updateOptions", newSupportChart);
  }, [navType, orangeDark]);
  useEffect(() => {
    async function getData() {
      const d = await getJoeDayData();
      setChartData(d.data);
    }
    getData();
  }, []);
  const updateApex = async () => {
    // ApexCharts.exec('support-chart', [0]);
  };
  const cData = {
    type: "area",
    height: 95,
    options: {
      chart: {
        id: "support-chart",
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth",
        width: 1
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: "Ticket "
        },
        marker: {
          show: false
        }
      }
    },
    series: [
      {
        data: chartData
      }
    ]
  };
  return (
    <MainCard sx={{ background: "linear-gradient(to  top, #430089, #0095ff)" }}>
      <Grid container sx={{ p: 2, pb: 0, color: "#fff" }}>
        <Grid item xs={12}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography
                variant="subtitle1"
                sx={{ color: theme.palette.secondary.dark }}
              >
                JOEUSD
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4" sx={{ color: theme.palette.grey[800] }}>
                $2000
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="subtitle2"
            sx={{ color: theme.palette.grey[800] }}
          >
            10% Profit
          </Typography>
        </Grid>
      </Grid>
      <Chart {...cData} />
    </MainCard>
  );
};

export default BajajAreaChartCard;
