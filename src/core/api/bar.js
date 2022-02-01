import { barHistoriesQuery, barQuery, barUserQuery } from "../queries/bar";

import { getApollo } from "../apollo";

export async function getBar(client = getApollo()) {
  const { data } = await client.query({
    query: barQuery,
    context: {
      clientName: "bar"
    }
  });

  await client.cache.writeQuery({
    query: barQuery,
    data
  });

  return client.cache.readQuery({
    query: barQuery
  });
}

export async function getBarHistories(client = getApollo()) {
  const { data } = await client.query({
    query: barHistoriesQuery,
    context: {
      clientName: "bar"
    }
  });

  await client.cache.writeQuery({
    query: barHistoriesQuery,
    data
  });

  return client.cache.readQuery({
    query: barHistoriesQuery
  });
}

export async function getBarUser(id, client = getApollo()) {
  const { data } = await client.query({
    query: barUserQuery,
    variables: {
      id
    },
    context: {
      clientName: "bar"
    }
  });

  await client.cache.writeQuery({
    query: barUserQuery,
    data
  });

  return client.cache.readQuery({
    query: barUserQuery
  });
}
