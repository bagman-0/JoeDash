// material-ui
import LendingGrid from "../components/LendingGrid";
import {
  getMarkets,
  getMarketDayData,
  getLiquidationDayData
} from "../core/api/lending";
// project imports
import {
  Grid,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  Box
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { switchTheme } from "../store/reducer";
import { gridSpacing } from "store/constant";

// ==============================|| SAMPLE PAGE ||============================== //
import LendingGraph from "../components/LendingGraph";

const LendingPage = () => {
  const dispatch = useDispatch();
  const [gridData, setGridData] = useState([]);
  const [dataName, setDataName] = useState([]);
  const [liqData, setLiqData] = useState([]);
  const [dayData, setDayData] = useState([]);
  const customization = useSelector((state) => state.customization);
  const lendTheme = {
    dashAppBar: "green",
    heading: "#green",
    // componentBg: chroma(theme.colors.defaultPrimary).alpha(0.7),

    // navbar color
    // paper: "rgb(121, 134, 203, 0.0)",
    backgroundDefault: "rgb(27, 18, 107, 1)",
    // paper background of main page content
    background: "green",
    darkTextPrimary: "#fff",
    darkTextSecondary: "#fff"
  };
  console.log(customization);
  if (
    document.location.href.split("/")[
      document.location.href.split("/").length - 1
    ] === "lending"
  ) {
    console.log(document.location.href.split("/"));
    dispatch(switchTheme(lendTheme));
  }
  console.log(document.location.href);
  const [age, setAge] = useState("");

  useEffect(() => {
    async function formatGridData() {
      setGridData(await getMarkets());
      setDayData(
        await getMarketDayData("0x3fe38b7b610c0acd10296fef69d9b18eb7a9eb1f")
      );

      setLiqData(await getLiquidationDayData());
    }
    formatGridData();
  }, []);
  const handleChange = async (event) => {
    setDayData(await getMarketDayData(event.target.value));

    setDataName();
  };
  // console.log(
  // //   gridData?.sort(
  //     (a, b) => parseFloat(a.totalSupply) - parseFloat(b.totalSupply)
  //   )
  // );
  return (
    <>
      <Grid container spacing={gridSpacing}>
        <Grid item md={12} xs={12}>
          <Box>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Select</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={dataName}
                label="Select"
                onChange={handleChange}
              >
                {gridData.map((d) => (
                  <MenuItem value={d?.id} name={d?.name?.slice(10)}>
                    {" "}
                    {d?.name?.slice(10)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Grid>

        <Grid item md={6} xs={12}>
          <LendingGraph
            title="Borrows"
            name={dataName}
            data={dayData}
            datakey="totalBorrows"
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <LendingGraph
            title="Deposits"
            data={dayData}
            nameData={dataName}
            datakey="totalSupply"
          />
        </Grid>
        <Grid item md={12} xs={12}>
          <LendingGraph
            title="Liquidations"
            data={liqData}
            nameData={dataName}
            datakey="underlyingCollateralSeizedAmountUSD"
          />
        </Grid>
        <Grid item md={12} xs={12}>
          <LendingGrid data={gridData} />
        </Grid>
      </Grid>
    </>
  );
};

export default LendingPage;
