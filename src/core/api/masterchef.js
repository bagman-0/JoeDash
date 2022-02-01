import { getToken } from "./exchange";
import { getAverageBlockTime } from "./blocks";
import {
  liquidityPositionSubsetQuery,
  pairQuery,
  pairSubsetQuery
} from "../queries/exchange";
import {
  poolHistoryQuery,
  avaxPriceQuery,
  poolIdsQuery,
  poolQuery,
  poolUserQuery,
  poolsQuery
} from "../queries";

import { FARMS_BLACKLIST } from "../constants";
import { getApollo } from "../apollo";
import { sub } from "date-fns";

import { JOE_TOKEN_ADDDRESS, MASTERCHEF_ADDRESS } from "../config/index.js";

export async function getAvaxPrice(client = getApollo()) {
  const { data } = await client.query({
    query: avaxPriceQuery
  });

  await client.cache.writeQuery({
    query: avaxPriceQuery,
    data
  });

  return client.cache.readQuery({
    query: avaxPriceQuery
  });
}

export async function getPoolIds(client = getApollo()) {
  const {
    data: { pools }
  } = await client.query({
    query: poolIdsQuery,
    context: {
      clientName: "masterchef"
    }
  });
  await client.cache.writeQuery({
    query: poolIdsQuery,
    data: {
      pools: pools.filter(
        (pool) => !FARMS_BLACKLIST.includes(pool.id) && pool.allocPoint !== "0"
      )
    }
  });
  return client.cache.readQuery({
    query: poolIdsQuery
  });
}

export async function getPoolUser(id, client = getApollo()) {
  const { data } = await client.query({
    query: poolUserQuery,
    fetchPolicy: "network-only",
    variables: {
      address: id
    },
    context: {
      clientName: "masterchef"
    }
  });

  await client.cache.writeQuery({
    query: poolUserQuery,
    data
  });

  return client.cache.readQuery({
    query: poolUserQuery
  });
}

export async function getPoolHistories(id, client = getApollo()) {
  const {
    data: { poolHistories }
  } = await client.query({
    query: poolHistoryQuery,
    fetchPolicy: "network-only",
    variables: { id },
    context: {
      clientName: "masterchef"
    }
  });

  await client.cache.writeQuery({
    query: poolHistoryQuery,
    data: {
      poolHistories
    }
  });

  return client.cache.readQuery({
    query: poolHistoryQuery
  });
}

export async function getPool(id, client = getApollo()) {
  const {
    data: { pool }
  } = await client.query({
    query: poolQuery,
    fetchPolicy: "network-only",
    variables: { id },
    context: {
      clientName: "masterchef"
    }
  });

  const {
    data: { pair: liquidityPair }
  } = await client.query({
    query: pairQuery,
    variables: { id: pool.pair },
    fetchPolicy: "network-only"
  });

  await client.cache.writeQuery({
    query: poolQuery,
    data: {
      pool: {
        ...pool,
        liquidityPair
      }
    }
  });

  return client.cache.readQuery({
    query: poolQuery
  });
}

export async function getPools(client = getApollo()) {
  const {
    data: { pools }
  } = await client.query({
    query: poolsQuery,
    context: {
      clientName: "masterchef"
    }
  });

  const pairAddresses = pools.map((pool) => pool.pair).sort();

  const {
    data: { pairs }
  } = await client.query({
    query: pairSubsetQuery,
    variables: { pairAddresses },
    fetchPolicy: "network-only"
  });

  // AVAX price
  const { bundles } = await getAvaxPrice();
  const avaxPrice =    bundles[0] && bundles[0].hasOwnProperty("avaxPrice")
      ? bundles[0].avaxPrice
      : 0;

  // JOE token
  const tokenAddress = JOE_TOKEN_ADDDRESS;
  const { token } = await getToken(tokenAddress);
  const joePrice = avaxPrice * token.derivedAVAX;

  // MASTERCHEF
  const {
    data: { liquidityPositions }
  } = await client.query({
    query: liquidityPositionSubsetQuery,
    variables: { user: MASTERCHEF_ADDRESS }
  });

  await client.cache.writeQuery({
    query: poolsQuery,
    data: {
      pools: pools
        .filter(
          (pool) => !FARMS_BLACKLIST.includes(pool.id)
            && pool.allocPoint !== "0"
            && pool.accJoePerShare !== "0"
            && pairs.find((pair) => pair?.id === pool.pair)
        )
        .map((pool) => {
          const pair = pairs.find((pair) => pair.id === pool.pair);

          // JOE rewards issued per sec
          const balance =            Number(pool.balance / 1e18) > 0 ? Number(pool.balance / 1e18) : 0.1;
          const totalSupply = pair.totalSupply > 0 ? pair.totalSupply : 0.1;
          const reserveUSD = pair.reserveUSD > 0 ? pair.reserveUSD : 0.1;
          const balanceUSD =            (balance / Number(totalSupply)) * Number(reserveUSD);
          const rewardPerSec =            ((pool.allocPoint / pool.owner.totalAllocPoint)
              * pool.owner.joePerSec)
            / 2
            / 1e18;

          // calc yields
          const roiPerSec = (rewardPerSec * joePrice) / balanceUSD;
          const roiPerHour = roiPerSec * 60 * 60;
          const roiPerDay = roiPerHour * 24;
          const roiPerMonth = roiPerDay * 30;
          const roiPerYear = roiPerMonth * 12;

          // TVL
          const liquidityPosition = liquidityPositions.find(
            (liquidityPosition) => liquidityPosition.pair.id === pair.id
          );

          return {
            ...pool,
            liquidityPair: pair,
            rewardPerSec,
            roiPerHour,
            roiPerDay,
            roiPerMonth,
            roiPerYear,
            tvl:
              (pair.reserveUSD / pair.totalSupply)
              * liquidityPosition.liquidityTokenBalance
          };
        })
    }
  });

  return client.cache.readQuery({
    query: poolsQuery
  });
}
