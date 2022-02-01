// // liquidity chart
// // start with total liquidity
//
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
//
// // material-ui
// import { useTheme } from "@mui/material/styles";
// import { Card, Grid, Typography } from "@mui/material";
//
// // third-party
// import ApexCharts from "apexcharts";
// import Chart from "react-apexcharts";
//
// // project imports
// import getJoeDayData from "./dash-data";
// // ===========================|| DASHBOARD DEFAULT - BAJAJ AREA CHART CARD ||=========================== //
//
// const DashVolumeChart = () => {
//   const [chartData, setChartData] = useState([0]);
//   const theme = useTheme();
//   const customization = useSelector((state) => state.customization);
//   const { navType } = customization;
//   const orangeDark = theme.palette.secondary[800];
//   useEffect(() => {
//     const newSupportChart = {
//       colors: [orangeDark],
//       tooltip: {
//         theme: "light"
//       }
//     };
//
//     ApexCharts.exec(`support-chart2`, "updateOptions", newSupportChart);
//   }, [navType, orangeDark]);
//
//   useEffect(() => {
//     async function getData() {
//       const d = await getJoeDayData("joe");
//       const xy = [];
//       d.forEach((item) => {
//         xy.push({ x: item.date, y: item.volumeUSD });
//       });
//
//       setChartData(xy);
//     }
//     getData();
//   }, []);
//   console.log(chartData);
//   const updateApex = async () => {
//     ApexCharts.exec("support-chart2", [0]);
//   };
//
//   const cData = {
//     type: "area",
//
//     options: {
//       chart: {
//         id: "support-chart2",
//         sparkline: {
//           enabled: true
//         },
//         animations: {
//           enabled: true,
//           easing: "linear",
//           speed: 200,
//           animateGradually: {
//             enabled: true,
//             delay: 150
//           },
//           dynamicAnimation: {
//             enabled: true,
//             speed: 350
//           }
//         }
//       },
//
//       fill: {
//         type: "gradient",
//         gradient: {
//           shade: "dark",
//           gradientToColors: ["#0095ff"],
//           shadeIntensity: 1,
//           type: "vertical",
//           opacityFrom: 0.8,
//           opacityTo: 1,
//           stops: [25, 90, 100]
//         }
//       },
//       dataLabels: {
//         enabled: false
//       },
//       stroke: {
//         curve: "smooth",
//         width: 1
//       },
//       tooltip: {
//         fixed: {
//           enabled: false
//         },
//         x: {
//           show: true
//         },
//         y: {
//           title: "Ticket "
//         },
//         marker: {
//           show: false
//         }
//       }
//     },
//     series: [
//       {
//         type: "area",
//         data: chartData
//       }
//     ]
//   };
//   return (
//     <Card sx={{ bgcolor: "primary.200", opacity: 0.9 }}>
//       <Grid container sx={{ p: 5, pb: 0 }}>
//         <Grid item xs={12}>
//           <Grid container alignItems="center" justifyContent="space-between">
//             <Grid item>
//               <Typography
//                 variant="h3"
//                 sx={{ color: theme.palette.secondary.dark }}
//               >
//                 Volume
//               </Typography>
//             </Grid>
//             <Grid item>
//               <Typography variant="h4" sx={{ color: theme.palette.grey[800] }}>
//                 {chartData[0].y}
//               </Typography>
//             </Grid>
//           </Grid>
//         </Grid>
//         <Grid item xs={12}>
//           <Typography
//             variant="subtitle2"
//             sx={{ color: theme.palette.grey[800] }}
//           >
//             {chartData[0].x}
//           </Typography>
//         </Grid>
//       </Grid>
//       <Chart {...cData} />
//     </Card>
//   );
// };
// export default DashVolumeChart;
