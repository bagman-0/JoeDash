// material-ui
import { styled, useTheme } from "@mui/material/styles";

import { Typography, Box, Grid, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { getMarkets } from "../core/api/lending";
// project imports
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { switchTheme } from "../store/reducer";
// ==============================|| SAMPLE PAGE ||============================== //

const formatData = async (data) => {
  const cols = [
    {
      field: "id",
      headerName: "ID",
      width: 150
    },
    {
      field: "pair",
      headerName: "Pair",
      width: 150
    },
    {
      field: "supplied",
      headerName: "Supply",
      width: 300
    },
    {
      field: "borrowed",
      headerName: "Borrows",
      width: 150
    },
    { field: "cFactor", headerName: "Collateral Factor", width: 240 }
  ];
  const formatted = await data?.map((d) => {
    const rows = {
      id: d?.id,
      pair: d?.name,
      supplied: d?.totalSupply,
      borrowed: d?.totalBorrows
    };

    return rows;
  });
  return { cols, rows: formatted };
};
const GridWrapper = styled(Paper)(({ theme }) => ({
  overflow: "hidden",
  position: "relative",

  height: "100%",
  backdropFilter: "blur(3px)"
  // "&:hover": {
  //   color: "#ffee10",
  //   boxShadow:
  //     "rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px"
  //   // box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;
  //   // textShadow: "0 0 5px #ffee10"
  // }
}));

const LendingGrid = ({ data }) => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  const lendTheme = {
    dashAppBar: "green",
    heading: "#green",

    backgroundDefault: "rgb(27, 18, 107, 1)",
    // paper background of main page content
    background: "green",
    darkTextPrimary: "#fff",
    darkTextSecondary: "#fff"
  };
  const theme = useTheme();
  return (
    <Paper
      sx={{
        height: "600px",
        backdropFilter: "blur(3px)",
        background: "rgb(27, 18, 107, 0.6)"
      }}
    >
      <DataGrid
        rows={
          data
          && data?.map((d) => ({
            id: d?.id,
            pair: d?.name,
            supplied: d?.totalSupply,
            borrowed: d?.totalBorrows,
            cFactor: d?.collateralFactor
          }))
        }
        columns={[
          {
            field: "id",
            headerName: "ID",
            width: 150
          },
          {
            field: "pair",
            headerName: "Pair",
            width: 150
          },
          {
            field: "supplied",
            headerName: "Supply",
            width: 300
          },
          {
            field: "borrowed",
            headerName: "Borrows",
            width: 150
          },
          { field: "cFactor", headerName: "Collateral Factor", width: 240 }
        ]}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
        sx={{
          borderRadius: 4,
          p: 3,
          opacity: 0.8,
          backgroundColor: theme?.dashAppBar
          // backdropFilter: "blur(3px)"
          // boxShadow:
          //     "rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px"
        }}
      />
    </Paper>
  );
};
export default LendingGrid;
