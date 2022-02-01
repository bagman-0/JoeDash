import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import PoolGridWrapper from "./PoolGridWrapper";
import Paper from "@mui/material/Paper";
import Backdrop from "@mui/material/Backdrop";
import { getPools } from "../../../core/api/masterchef";

import { useState, useEffect } from "react";
import CustomColumnMenu from "./pool2";
//

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
      field: "roiPerMonth",
      headerName: "Monthly ROI",
      width: 300
    },
    {
      field: "roiPerYear",
      headerName: "Yearly ROI",
      width: 150
    }
  ];
  const formatted = await data?.map((d) => {
    const rows = {
      id: d?.liquidityPair?.id,
      pair: d?.liquidityPair?.name,
      roiPerMonth: d?.roiPerMonth * 100,
      roiPerYear: d?.roiPerYear * 100
    };
    return rows;
  });
  //   if (rows) {
  //     return rows;
  //   }
  //   return [{}];
  // });
  console.log(cols);
  return { cols, rows: formatted };
};

const DataGridDemo = () => {
  const [gridData, setGridData] = useState({ rows: [], cols: [] });

  useEffect(() => {
    async function formatGridData() {
      const dd = await formatData(getPools());
      console.log(dd);
      setGridData(dd);
    }
    formatGridData();
  }, []);
  return (
    <Paper
      style={{
        height: 1000,
        width: "100%",
        backgroundColor: "#fff",
        opacity: 0.8
      }}
      sx={{ borderRadius: 4 }}
    >
      <DataGrid
        rows={gridData?.rows}
        columns={gridData?.cols}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        sx={{ borderRadius: 4, p: 3 }}
      />
    </Paper>
  );
};

export default DataGridDemo;
