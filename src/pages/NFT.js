// material-ui
import PairsGrid from "../components/PairsGrid";
import { getPairs } from "../core/api";
// project imports
import { Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { switchTheme } from "../store/reducer";
import { gridSpacing } from "store/constant";

// ==============================|| trading pair stats info page ||============================== //

const NFT = () => {
  const [gridData, setGridData] = useState([]);
  // const customization = useSelector((state) => state.customization);
  // console.log(switchTheme(lendTheme));
  // if (customization.theme === "lending") {
  //   dispatch(switchTheme(lendTheme));
  // }
  // console.log(customization);
  useEffect(() => {
    async function formatGridData() {
      const d = await getPairs();
      setGridData(await getPairs());
    }
    formatGridData();
  }, []);
  return (
    <>
      <Grid container spacing={gridSpacing}>
        <Grid item md={12} xs={12}>
          <PairsGrid data={gridData?.pairs} />
        </Grid>
      </Grid>
    </>
  );
};

export default NFT;
