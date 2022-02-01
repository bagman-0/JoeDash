// material-ui
import { styled, useTheme } from "@mui/material/styles";

import { Typography, Box, Grid, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { getMarkets } from "../../core/api/lending";
// project imports
import MainCard from "ui-component/cards/MainCard";
import { useState, useEffect } from "react";
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
    }
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
  console.log(formatted);
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

const DataGridDemo = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  const theme = useTheme();
  const [gridData, setGridData] = useState({ rows: [], cols: [] });

  useEffect(() => {
    async function formatGridData() {
      // const d = await getPairs();
      const gd = await getMarkets();
      console.log(gd);
      const formattedD = await formatData(gd);
      setGridData(formattedD);
    }
    formatGridData();
  }, []);

  return (
    <DataGrid
      rows={gridData?.rows}
      columns={gridData?.cols}
      pageSize={10}
      rowsPerPageOptions={[5]}
      checkboxSelection
      disableSelectionOnClick
      sx={{
        borderRadius: 4,
        p: 3,
        opacity: 0.8,
        backgroundColor: "#fff",
        backdropFilter: "blur(3px)"
        // boxShadow:
        //     "rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px"
      }}
    />
  );
};
export default DataGridDemo;

// style={{
//   height: 1000,
//   width: "100%",
//   backgroundColor: "#fff",
//   opacity: 0.8
// }}
// sx={{ borderRadius: 4 }}
// >
