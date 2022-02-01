// material-ui
import { Typography, Box, Grid, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { getMarkets } from "../../core/api/lending";
// project imports
import MainCard from "ui-component/cards/MainCard";
import LendingGrid from "./LendingGrid";
import { useState, useEffect } from "react";
// ==============================|| SAMPLE PAGE ||============================== //

const LendingPage = () => <LendingGrid />;

export default LendingPage;
