import {
  marketsQuery,
  marketQuery,
  marketFieldsQuery,
  marketDayDatasQuery,
  allLiquidationDayDatasQuery,
  allMarketDayDatasQuery
} from "../queries/lending";
import { getApollo } from "../apollo";

import { ApolloClient, InMemoryCache } from "@apollo/client";

export async function getMarkets() {
  const APIURL =    "https://api.thegraph.com/subgraphs/name/traderjoe-xyz/lending";

  const client = new ApolloClient({
    uri: APIURL,
    cache: new InMemoryCache()
  });

  const {
    data: { markets }
  } = await client.query({
    query: marketsQuery
  });
  return markets;
}

export async function getMarket(id) {
  const APIURL =    "https://api.thegraph.com/subgraphs/name/traderjoe-xyz/lending";

  const client = new ApolloClient({
    uri: APIURL,
    cache: new InMemoryCache()
  });

  const {
    data: { market }
  } = await client.query({
    query: marketQuery,
    variables: { id }
  });

  return market;
}

export async function getMarketDayData(id) {
  const APIURL =    "https://api.thegraph.com/subgraphs/name/traderjoe-xyz/lending";

  const client = new ApolloClient({
    uri: APIURL,
    cache: new InMemoryCache()
  });

  const market = await client.query({
    query: marketDayDatasQuery,
    variables: { markets: [id] }
  });

  return market?.data.marketDayDatas;
}

export async function getLiquidationDayData() {
  const APIURL =    "https://api.thegraph.com/subgraphs/name/traderjoe-xyz/lending";

  const client = new ApolloClient({
    uri: APIURL,
    cache: new InMemoryCache()
  });

  const market = await client.query({
    query: allLiquidationDayDatasQuery
  });
  return market?.data.liquidationDayDatas;
}
// allLiquidationDayDatasQuery
// query marketDayDatas($first: Int = 1000, $date: Int = 0, $markets: [Bytes]!) {
