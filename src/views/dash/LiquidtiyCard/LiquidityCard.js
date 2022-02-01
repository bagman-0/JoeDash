import PropTypes from "prop-types";
import { useState, useEffect } from "react";

// material-ui
import { styled, useTheme } from "@mui/material/styles";
import {
  Avatar,
  Paper,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from "@mui/material";

// project imports
import MainCard from "ui-component/cards/MainCard";
import TotalIncomeCard from "ui-component/cards/Skeleton/TotalIncomeCard";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
// assets
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import { getPairs } from "../../../core/api";

// styles
const CardWrapper = styled(MainCard)(({ theme }) => ({
  overflow: "hidden",
  borderRadius: "0px",
  boxShadow: "0px 0px 20px 10px rgb(27, 18, 107, 0.7)",
  position: "relative",
  "&:after": {
    content: '""',
    position: "absolute",
    width: 210,
    height: 210,
    background: `linear-gradient(210.04deg, ${theme.palette.warning.dark} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
    borderRadius: "50%",
    top: -30,
    right: -180
  },
  "&:before": {
    content: '""',
    position: "absolute",
    width: 210,
    height: 210,
    background: `linear-gradient(140.9deg, ${theme.palette.warning.dark} -14.02%, rgba(144, 202, 249, 0) 70.50%)`,
    borderRadius: "50%",
    top: -160,
    right: -130
  }
}));
// ==============================|| DASHBOARD - TOTAL INCOME DARK CARD ||============================== //

export const LiquidityCard = ({ isLoading, data }) => {
  const theme = useTheme();
  const [liqCardData, setLiqCardData] = useState([0]);

  // useEffect(() => {
  //   async function formatGridData() {
  //     setLiqCardData(data);
  //   }
  //   formatGridData();
  // });
  // console.log(data);
  //         <CardWrapper border={false} content={false}>
  console.log(data);
  return (
    <>
      {isLoading ? (
        <TotalIncomeCard />
      ) : (
        <Paper
          sx={{
            boxShadow: "0px 0px 20px 10px rgb(27, 18, 107, 0.7)",
            bgcolor: theme.palette.primary.dark,
            height: 365
          }}
        >
          <Box
            sx={{
              p: 2,
              bgcolor: theme.palette.primary.dark,
              opacity: 1
            }}
          >
            <List sx={{ py: 0 }}>
              <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
                <ListItemAvatar>
                  <Avatar
                    variant="rounded"
                    sx={{
                      ...theme.typography.commonAvatar,
                      ...theme.typography.largeAvatar,
                      backgroundColor: theme.palette.primary[800],
                      color: "#fff"
                    }}
                  >
                    <TableChartOutlinedIcon fontSize="inherit" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  sx={{
                    py: 0,
                    mt: 0.45,
                    mb: 0.45
                  }}
                  primary={(
                    <Typography variant="h4" sx={{ color: "#fff" }}>
                      $203k
                    </Typography>
                  )}
                  secondary={(
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "secondary.light", mt: 0.25 }}
                    >
                      Liquid Trading Pairs
                    </Typography>
                  )}
                />
              </ListItem>
              <ListItem>ffff</ListItem>
            </List>
            <ResponsiveContainer height={250} width="100%">
              <AreaChart
                width={500}
                height={300}
                margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
                data={data?.slice(0, 20)?.map((d) => ({
                  sevenDayVolume: d?.volumeUSD,
                  timestamp: d?.timestamp,
                  oneDayVolume: d?.volumeUSD
                }))}
              >
                <defs>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ffb108" stopOpacity={1} />
                    <stop offset="95%" stopColor="#ffb108" stopOpacity={0.6} />
                  </linearGradient>
                </defs>
                <Tooltip />
                <Tooltip content={<Box>ffff </Box>} />
                <Area
                  dataKey="sevenDayVolume"
                  type="monotone"
                  stroke="#ffb108"
                  fill="url(#colorPv)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </Box>
        </Paper>
      )}
    </>
  );
};

LiquidityCard.propTypes = {
  isLoading: PropTypes.bool
};

export default LiquidityCard;
