import PropTypes from "prop-types";
import { useState, useEffect } from "react";

// material-ui
import { styled, useTheme } from "@mui/material/styles";
import {
  Avatar,
  Paper,
  Box,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from "@mui/material";

// project imports
import MainCard from "./MainCard";
import TotalIncomeCard from "./SkeletonComponents/TotalIncomeCard";
import {
  LineChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
// assets
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import { getMarket, getMarketDayData } from "../core/api/lending";

import chroma from "chroma-js";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <Box sx={{ background: "white" }}>
        <Typography>{payload[0]?.payload?.totalBorrowsUSD}</Typography>
      </Box>
    );
  }

  return null;
};
const LendingGraph = ({ isLoading, data, nameData, title, datakey }) => {
  const theme = useTheme();
  console.log(theme);
  return (
    <>
      <Box
        sx={{
          height: "500px",
          background: theme
            .transparent(theme.palette.default.primary, 0.7)
            .hex(),
          boxShadow: "0px 0px 20px 10px rgb(27, 18, 107, 0.7)",
          px: 1
        }}
      >
        <Box
          sx={{
            background: "transparent",
            justifyContent: "flex-end",
            pt: 2
          }}
        >
          <Typography
            variant="h1"
            align="right"
            sx={{
              pr: 4,
              textShadow: "0 0 5px #1b126b, 0 0 10px #fff, 0 0 15px #fff"
            }}
          >
            {title}
{' '}
{nameData}
          </Typography>
          <Typography variant="h2" align="right" sx={{ pr: 4, pt: 1 }}>
            $
          </Typography>
        </Box>
        <ResponsiveContainer height="80%" width="100%">
          <LineChart
            data={
              data
              && data?.map((d) => ({
                date: d?.date,
                [datakey]: Number(d[datakey])
              }))
            }
          >
            <XAxis
              type="category"
              domain={[0, "dataMax"]}
              dataKey="date"
              axisLine={false}
              background="white"
            />
            <YAxis type="number" dataKey={datakey} domain={[0, "dataMax"]} />
            <Tooltip content={<CustomTooltip />} />

            <Line fill="#8884d8" dataKey={datakey} />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </>
  );
};

LendingGraph.propTypes = {
  isLoading: PropTypes.bool
};

export default LendingGraph;
