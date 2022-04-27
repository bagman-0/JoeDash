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

import chroma from "chroma-js";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <Box sx={{ background: "white" }}>
        <Typography>{payload[0]?.payload?.sevenDayVolume}</Typography>
      </Box>
    );
  }

  return null;
};

export const LiquidityCard = ({ isLoading, data, title }) => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          height: "400px",
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
          </Typography>
          <Typography variant="h2" align="right" sx={{ pr: 4, pt: 1 }}>
            $
{data && Math.round(Number(data[3]?.volumeUSD))}
          </Typography>
        </Box>

        <ResponsiveContainer height="70%" width="100%" position="relative">
          <LineChart
            margin={{ top: 25, left: -20, right: 0, bottom: 10 }}
            data={data?.slice(0, 20)?.map((d) => ({
              sevenDayVolume: d?.volumeUSD,
              timestamp: d?.timestamp
            }))}
          >
            <XAxis
              dataKey="timestamp"
              axisLine={false}
              background="white"
              tickCount="10"
              domain={[0, "dataMax - 10"]}
            />
            <Tooltip content={<CustomTooltip />} />
            <YAxis type="number" domain={[0, 20000000000]} />
            <Line stroke="#FFF" type="monotone" dataKey="sevenDayVolume" />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </>
  );
};

LiquidityCard.propTypes = {
  isLoading: PropTypes.bool
};

export default LiquidityCard;
