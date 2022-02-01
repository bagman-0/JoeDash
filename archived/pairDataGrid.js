// import { DataGrid } from "@mui/x-data-grid";
//
// import PropTypes from "prop-types";
// import { useState, useEffect } from "react";
//
// // material-ui
// import { useTheme } from "@mui/material/styles";
// import {
//   Avatar,
//   Button,
//   CardActions,
//   CardContent,
//   Divider,
//   Grid,
//   Menu,
//   MenuItem,
//   Typography
// } from "@mui/material";
//
// // project imports
// import BajajAreaChartCard from "../dashboard/Default/BajajAreaChartCard";
// import MainCard from "ui-component/cards/MainCard";
// import SkeletonPopularCard from "ui-component/cards/Skeleton/PopularCard";
// import { gridSpacing } from "store/constant";
//
// // assets
// import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
// import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
// import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
// import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
// // import getJoeDayData from "./dash-data";
// import { getPairs, getTokenPairs } from "../../core/api";
//
// // ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //
//
// const PairDataGrid = ({ isLoading }) => {
//   const rows: (GridRowsProp = [
//     { id: 1, col1: "Hello", col2: "World" },
//     { id: 2, col1: "DataGridPro", col2: "is Awesome" },
//     { id: 3, col1: "MUI", col2: "is Amazing" }
//   ]);
//
//   const columns: GridColDef[] = [
//     { field: "col1", headerName: "Column 1", width: 150 },
//     { field: "col2", headerName: "Column 2", width: 150 }
//   ];
//   return (
//     <div style={{ height: 300, width: "100%" }}>
//       <DataGrid rows={rows} columns={columns} />
//     </div>
//   );
// };
//
// PairDataGrid.propTypes = {
//   isLoading: PairDataGrid.bool
// };
//
// export default PairDataGrid;
