import { useEffect, useState } from "react";

// material-ui
import { Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import MainCard from "ui-component/cards/MainCard";

import TopPools from "../components/TopPools";
import PoolGrid from "../components/PoolGrid";
import { LiquidityCard } from "../components/LiquidityCard";
// import getJoeDayData from "./dash-data";
import TVLPie from "../components/TVLPie";
// project imports
// import new components
import { gridSpacing } from "store/constant";
import { getPairs } from "../core/api";
import { getPools } from "../core/api/masterchef";
import { getApollo } from "../core/apollo";

const dashData = async () => {
  const d = await getPairs();
  const rewardD = await getPools();
  // const pairUrls = await fetch(
  //   "https://api.coingecko.com/api/v3/coins/avalanche-2?sparkline=true"
  // ).then((data) => data?.json());
  return { pairs: d.pairs, pools: rewardD.pools, pairImages: [] };
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
    };
    getDashData();
  }, []);
  // how to map lists to elements in jsx
  // {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (
  //   <Item key={elevation} elevation={elevation}>
  //     {`elevation=${elevation}`}
  //   </Item>
  // ))}
  // <TopPools data={allDashData?.pools} />
  // <TVLPie data={allDashData?.pools} />
  // <PoolGrid isLoading={isLoading} data={allDashData?.pools} />
  // <LiquidityCard isLoading={isLoading} data={allDashData?.pairs} />
  const rows = [
    { id: 1, col1: "Hello", col2: "World" },
    { id: 2, col1: "XGrid", col2: "is Awesome" },
    { id: 3, col1: "Material-UI", col2: "is Amazing" },
    { id: 4, col1: "Hello", col2: "World" },
    { id: 5, col1: "XGrid", col2: "is Awesome" },
    { id: 6, col1: "Material-UI", col2: "is Amazing" }
  ];

  const columns = [
    { field: "id", hide: true },
    { field: "col1", headerName: "Column 1", width: 150 },
    { field: "col2", headerName: "Column 2", width: 150 }
  ];

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item md={4.5} xs={12}>
        <LiquidityCard
          isLoading={isLoading}
          data={allDashData?.pairs}
          title="Liquidity"
        />
      </Grid>
      <Grid item md={4.5} xs={12}>
        <LiquidityCard
          isLoading={isLoading}
          data={allDashData?.pairs}
          title="Volume"
        />
      </Grid>
      <Grid item md={3} xs={12}>
        <TVLPie data={allDashData?.pools} />
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={8}>
            <PoolGrid isLoading={isLoading} data={allDashData?.pools} />
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container direction="column" spacing={gridSpacing}>
              <Grid item>
                <TopPools isLoading={isLoading} data={allDashData?.pools} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Dash;
