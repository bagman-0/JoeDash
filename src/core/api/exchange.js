import {
  dayDatasQuery,
  factoryQuery,
  factoryTimeTravelQuery,
  tokenQuery,
  tokenTimeTravelQuery,
  tokensQuery,
  tokensTimeTravelQuery,
  userQuery,
  userIdsQuery
} from "../queries/exchange";
import { getOneDayBlock, getSevenDayBlock, getTwoDayBlock } from "./blocks";

import { getApollo } from "../apollo";
import { FACTORY_ADDRESS, JOE_TOKEN_ADDDRESS } from "../config";

export async function getFactory(client = getApollo()) {
  const {
    data: { factory }
  } = await client.query({
    query: factoryQuery
  });

  const {
    data: { factory: oneDay }
  } = await client.query({
    query: factoryTimeTravelQuery,
    variables: {
      block: await getOneDayBlock()
    }
  });

  const {
    data: { factory: twoDay }
  } = await client.query({
    query: factoryTimeTravelQuery,
    variables: {
      block: await getTwoDayBlock()
    }
  });

  await client.cache.writeQuery({
    query: factoryQuery,
    data: {
      factory: {
        ...factory,
        oneDay,
        twoDay
      }
    }
  });

  return client.cache.readQuery({
    query: factoryQuery
  });
}

export async function getDayData(client = getApollo()) {
  const { data } = await client.query({
    query: dayDatasQuery
  });

  await client.cache.writeQuery({
    query: dayDatasQuery,
    data
  });

  return client.cache.readQuery({
    query: dayDatasQuery
  });
}

// Tokens

export async function getToken(id, client = getApollo()) {
  const {
    data: { token }
  } = await client.query({
    query: tokenQuery,
    variables: { id }
  });

  const oneDayBlock = await getOneDayBlock();
  const twoDayBlock = await getTwoDayBlock();

  const {
    data: { token: oneDayToken }
  } = await client.query({
    query: tokenTimeTravelQuery,
    variables: {
      id,
      block: oneDayBlock
    },
    fetchPolicy: "no-cache"
  });

  const {
    data: { token: twoDayToken }
  } = await client.query({
    query: tokenTimeTravelQuery,
    variables: {
      id,
      block: twoDayBlock
    },
    fetchPolicy: "no-cache"
  });

  await client.cache.writeQuery({
    query: tokenQuery,
    variables: {
      id
    },
    data: {
      token: {
        ...token,
        oneDay: {
          volumeUSD: String(oneDayToken?.volumeUSD),
          derivedAVAX: String(oneDayToken?.derivedAVAX),
          liquidity: String(oneDayToken?.liquidity),
          txCount: String(oneDayToken?.txCount)
        },
        twoDay: {
          volumeUSD: String(twoDayToken?.volumeUSD),
          derivedAVAX: String(twoDayToken?.derivedAVAX),
          liquidity: String(twoDayToken?.liquidity),
          txCount: String(twoDayToken?.txCount)
        }
      }
    }
  });

  return client.cache.readQuery({
    query: tokenQuery,
    variables: { id }
  });
}

export async function getTokens(client = getApollo()) {
  const {
    data: { tokens }
  } = await client.query({
    query: tokensQuery
  });

  const block = await getOneDayBlock();

  const {
    data: { tokens: oneDayTokens }
  } = await client.query({
    query: tokensTimeTravelQuery,
    variables: {
      block
    },
    fetchPolicy: "no-cache"
  });

  const {
    data: { tokens: sevenDayTokens }
  } = await client.query({
    query: tokensTimeTravelQuery,
    variables: {
      block: await getSevenDayBlock()
    },
    fetchPolicy: "no-cache"
  });

  await client.writeQuery({
    query: tokensQuery,
    data: {
      tokens: tokens.map((token) => {
        const oneDayToken = oneDayTokens.find(({ id }) => token.id === id);
        const sevenDayToken = sevenDayTokens.find(({ id }) => token.id === id);
        return {
          ...token,
          oneDay: {
            volumeUSD: String(oneDayToken?.volumeUSD),
            derivedAVAX: String(oneDayToken?.derivedAVAX),
            liquidity: String(oneDayToken?.liquidity)
          },
          sevenDay: {
            volumeUSD: String(sevenDayToken?.volumeUSD),
            derivedAVAX: String(sevenDayToken?.derivedAVAX),
            liquidity: String(sevenDayToken?.liquidity)
          }
        };
      })
    }
  });

  return client.cache.readQuery({
    query: tokensQuery
  });
}

// Users

export async function getUser(id, client = getApollo()) {
  const {
    data: { user }
  } = await client.query({
    query: userQuery,
    variables: { id }
  });

  await client.cache.writeQuery({
    query: userQuery,
    variables: {
      id
    },
    data: {
      user: {
        id
      }
    }
  });

  return client.cache.readQuery({
    query: userQuery,
    variables: { id }
  });
}

export async function getJoeToken(client = getApollo()) {
  return getToken(JOE_TOKEN_ADDDRESS, client);
}

export async function getUsers(client = getApollo()) {
  const {
    data: { users }
  } = await client.query({
    query: userIdsQuery
  });

  await client.writeQuery({
    query: userIdsQuery,
    data: {
      users: users.map((user) => ({
        ...user
      }))
    }
  });

  return client.cache.readQuery({
    query: userIdsQuery
  });
}
