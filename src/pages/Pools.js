// material-ui
import LendingGrid from "../components/LendingGrid";
import { getPools } from "../core/api/masterchef";
// project imports
import { Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { switchTheme } from "../store/reducer";
import { gridSpacing } from "store/constant";
import PoolGrid from "../components/PoolGrid";

// ==============================|| trading pair pool info page ||============================== //

const PoolPage = () => {
  const [gridData, setGridData] = useState([]);
  const customization = useSelector((state) => state.customization);
  // console.log(switchTheme(lendTheme));
  // if (customization.theme === "lending") {
  //   dispatch(switchTheme(lendTheme));
  // }
  // console.log(customization);
  useEffect(() => {
    async function formatGridData() {
      // const d = await getPairs();
      setGridData(await getPools());
      console.log(gridData);
    }
    formatGridData();
  });
  console.log(gridData);
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item md={12} xs={12}>
        <PoolGrid data={gridData?.pools} />
      </Grid>
    </Grid>
  );
};

export default PoolPage;
