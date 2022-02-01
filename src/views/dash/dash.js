import { useEffect, useState } from "react";

// material-ui
import { Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import MainCard from "ui-component/cards/MainCard";

import TopPools from "./topPools";
import PoolGrid from "./PoolGrid/PoolGrid";
import { LiquidityCard } from "./LiquidtiyCard/LiquidityCard";
// import getJoeDayData from "./dash-data";
import TVLPie from "./TVLPie";
// project imports
// import new components
import { gridSpacing } from "store/constant";
import { getPairs } from "../../core/api";
import { getPools } from "../../core/api/masterchef";
import { getApollo } from "../../core/apollo";

const dashData = async () => {
  console.log(getApollo());
  const d = await getPairs();
  const rewardD = await getPools();
  const pairUrls = await fetch(
    "https://api.coingecko.com/api/v3/coins/avalanche-2?sparkline=true"
  ).then((data) => data?.json());
  return { pairs: d.pairs, pools: rewardD.pools, pairImages: pairUrls };
};

const Dash = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  const [allDashData, setAllDashData] = useState({});

  useEffect(() => {
    const getDashData = async () => {
      const allData = await dashData();
      setAllDashData(allData);
      console.log(allData);
    };
    getDashData();
  }, []);
  // how to map lists to elements in jsx
  // {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (
  //   <Item key={elevation} elevation={elevation}>
  //     {`elevation=${elevation}`}
  //   </Item>
  // ))}
  console.log(allDashData);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item md={4.5} xs={12}>
        <LiquidityCard isLoading={isLoading} data={allDashData?.pairs} />
      </Grid>
      <Grid item md={4.5} xs={12}>
        <LiquidityCard isLoading={isLoading} data={allDashData?.pairs} />
      </Grid>
      <Grid item md={3} xs={12}>
        <TVLPie data={allDashData?.pools} />
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={8}>
            <PoolGrid data={allDashData?.pools} />
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container direction="column" spacing={gridSpacing}>
              <Grid item>
                <TopPools data={allDashData?.pools} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Dash;
