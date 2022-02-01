// // liquidity chart
// // start with total liquidity
//
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
//
// // material-ui
// import { useTheme } from "@mui/material/styles";
// import { Box, Grid, Typography } from "@mui/material";
//
// // third-party
// import ApexCharts from "apexcharts";
// import Chart from "react-apexcharts";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer
// } from "recharts";
//
// import { getJoeToken } from "../../core/api/exchange";
// import { getPairs } from "../../core/api";
// // import getPairs from "../../core/api";
//
// // project imports
// import getJoeDayData from "./dash-data";
// // ===========================|| DASHBOARD DEFAULT - BAJAJ AREA CHART CARD ||=========================== //
//
// const DashLiquidityChart = () => {
//   const [chartData, setChartData] = useState([0]);
//   const [pairsData, setPairsData] = useState([
//     {
//       name: "name",
//       timestamp: [],
//       oneDayFees: [0],
//       sevenDayFees: [0]
//     }
//   ]);
//   const theme = useTheme();
//   const customization = useSelector((state) => state.customization);
//   const { navType } = customization;
//   const orangeDark = theme.palette.secondary[800];
//
//   // console.log(getPairs);
//
//   useEffect(() => {
//     async function getData() {
//       const d = await getPairs();
//       // const s = await getTokenPairs("0xa389f9430876455c36478deea9769b7ca4e3ddb1");
//       const time = [];
//       const oneday = [];
//       const twoDay = [];
//       const rows = await d.pairs.map((pair) => {
//         const volumeUSD =          pair?.volumeUSD === "0" ? pair?.untrackedVolumeUSD : pair?.volumeUSD;
//
//         const oneDayVolumeUSD =          pair?.oneDay?.volumeUSD === "0"
//             ? pair?.oneDay?.untrackedVolumeUSD
//             : pair?.oneDay?.volumeUSD;
//
//         const sevenDayVolumeUSD =          pair?.sevenDay?.volumeUSD === "0"
//             ? pair?.sevenDay?.untrackedVolumeUSD
//             : pair?.sevenDay?.volumeUSD;
//
//         const FEE_RATE = 0.0025;
//         const oneDayVolume = volumeUSD - oneDayVolumeUSD;
//         const oneDayFees = oneDayVolume * FEE_RATE;
//         const oneYearFeesAPR = (oneDayFees * 365 * 100) / pair.reserveUSD;
//         const sevenDayVolume = volumeUSD - sevenDayVolumeUSD;
//         const sevenDayFees = sevenDayVolume * FEE_RATE;
//         return {
//           ...pair,
//           displayName: `${pair.token0.symbol.replace(
//             "WETH",
//             "ETH"
//           )}-${pair.token1.symbol.replace("WETH", "ETH")}`,
//           oneDayVolume: !Number.isNaN(oneDayVolume) ? oneDayVolume : 0,
//           sevenDayVolume: !Number.isNaN(sevenDayVolume) ? sevenDayVolume : 0,
//           oneDayFees: !Number.isNaN(oneDayFees) ? oneDayFees : 0,
//           sevenDayFees: !Number.isNaN(sevenDayFees) ? sevenDayFees : 0,
//           oneYearFeesAPR
//         };
//       });
//       rows.sort((a, b) => a.timestamp.localeCompare(b.timestamp));
//
//       console.log(rows);
//       const f = await rows.map((data) => {
//         time.push(Number(data.timestamp));
//         oneday.push(data.oneDayVolume);
//         twoDay.push(data.sevenDayVolume);
//         return 0;
//       });
//       const e = await {
//         timestamp: time,
//         oneDayFees: oneday,
//         sevenDayFees: twoDay
//       };
//       console.log(rows);
//       setPairsData(rows);
//     }
//     getData();
//   }, []);
//
//   console.log(
//     pairsData
//       ?.map((data) => ({
//         sevenDayVolume: data?.volumeUSD,
//         timestamp: data?.timestamp,
//         oneDayVolume: data?.txCount
//       }))
//       ?.filter((value, index, Arr) => index % 20 === 0)
//   );
//
//   return (
//     <Box sx={{ bgcolor: "#fff", opacity: 0.8, borderRadius: 4 }}>
//       <Grid container sx={{ p: 5, pb: 0 }}>
//         <Grid item>
//           <Grid container alignItems="center" justifyContent="space-between">
//             <Grid item>
//               <Typography
//                 variant="h3"
//                 sx={{ color: theme.palette.secondary.dark }}
//               >
//                 Liquidity
//               </Typography>
//             </Grid>
//             <Grid item>
//               <Typography variant="h4" sx={{ color: theme.palette.grey[800] }}>
//                 $
//               </Typography>
//             </Grid>
//           </Grid>
//         </Grid>
//         <Grid item>
//           <Typography
//             variant="subtitle2"
//             sx={{ color: theme.palette.grey[800] }}
//           >
//             ff
//           </Typography>
//         </Grid>
//       </Grid>
//       <ResponsiveContainer height={500}>
//         <LineChart
//           width={500}
//           height={400}
//           data={pairsData
//             ?.map((data) => ({
//               sevenDayVolume: data?.volumeUSD,
//               timestamp: data?.timestamp,
//               oneDayVolume: data?.txCount
//             }))
//             ?.filter((value, index, Arr) => index % 20 === 0)}
//         >
//           <XAxis dataKey="timestamp" />
//           <YAxis />
//           <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
//           <Tooltip />
//           <Line type="monotone" dataKey="sevenDayVolume" stroke="#8884d8" />
//           <Line type="monotone" dataKey="sevenDayVolume" stroke="#8884d8" />
//         </LineChart>
//       </ResponsiveContainer>
//     </Box>
//   );
// };
// // <Chart {...cData} />
// export default DashLiquidityChart;
