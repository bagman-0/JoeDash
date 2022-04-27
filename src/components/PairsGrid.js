import { DataGrid } from "@mui/x-data-grid";
// import PoolGridWrapper from "./PoolGridWrapper";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
// import PropTypes from "prop-types";
// import TotalIncomeCard from "ui-component/cards/Skeleton/<!--  -->TotalIncomeCard";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const columns = [
  {
    field: "name",
    headerName: "Name",
    width: 200
  },
  {
    field: "totalSupply",
    headerName: "Total Supply",
    width: 250
  },
  {
    field: "volumeUSD",
    headerName: "Volume USD",
    width: 250
  },
  { field: "txCount", headerName: "txCount ", width: 300 },

  {
    field: "id",
    headerName: "ID",
    width: 300
  }
];

const PoolGrid = ({ isLoading, data }) => {
  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <PerfectScrollbar
        component="div"
        style={{
          height: !matchUpMd ? "calc(100vh - 56px)" : "calc(100vh - 88px)",
          paddingLeft: "16px",
          paddingRight: "16px"
        }}
      >
        <Paper
          sx={{
            borderRadius: 4,
            height: "75%",
            width: "100%",
            backgroundColor: theme
              .transparent(theme.palette.default.primary, 0.7)
              .hex(),
            opacity: 1,
            border: 0,
            boxShadow: `0px 0px 20px 10px rgb(27, 18, 107, 0.7)`
          }}
        >
          <DataGrid
            sx={{
              "& .MuiDataGrid-row:hover": {
                color: theme.lightText,
                backgroundColor: "theme.lightText",
                fontSize: 20
              }
            }}
            onRowDoubleClick={() => (
              <Box sx={{ height: 50, background: "green" }} />
            )}
            rows={
              data
                ? data?.map((d) => ({
                    id: d?.id,
                    name: d?.name,
                    totalSupply: d?.totalSupply,
                    volumeUSD: d?.volumeUSD,
                    txCount: d?.txCount
                  }))
                : [{ id: "0" }]
            }
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        </Paper>
      </PerfectScrollbar>
    </>
  );
};
// PoolGrid.propTypes = {
//   isLoading: PropTypes.bool
// };

export default PoolGrid;
