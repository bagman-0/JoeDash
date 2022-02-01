import { HttpLink, from, split } from "@apollo/client";

import { RetryLink } from "@apollo/client/link/retry";

import {
  GRAPH_BAR_URI,
  GRAPH_MASTERCHEF_URI,
  GRAPH_EXCHANGE_URI,
  GRAPH_BLOCKS_URI,
  GRAPH_LENDING_URI
} from "../config";

export const bar = from([
  new RetryLink(),
  new HttpLink({
    uri: GRAPH_BAR_URI,
    shouldBatch: true
  })
]);

export const masterchef = from([
  new RetryLink(),
  new HttpLink({
    uri: GRAPH_MASTERCHEF_URI,
    shouldBatch: true
  })
]);

export const exchange = from([
  new RetryLink(),
  new HttpLink({
    uri: GRAPH_EXCHANGE_URI,
    shouldBatch: true
  })
]);

export const lending = from([
  new RetryLink(),
  new HttpLink({
    uri: GRAPH_LENDING_URI,
    shouldBatch: true
  })
]);

export const blocklytics = from([
  new RetryLink(),
  new HttpLink({
    uri: GRAPH_BLOCKS_URI,
    shouldBatch: true
  })
]);

export const lockup = from([
  new RetryLink(),
  new HttpLink({
    uri: "https://api.thegraph.com/subgraphs/name/matthewlilley/lockup",
    shouldBatch: true
  })
]);

export default split(
  (operation) => operation.getContext().clientName === "blocklytics",
  blocklytics,
  split(
    (operation) => operation.getContext().clientName === "masterchef",
    masterchef,
    split(
      (operation) => operation.getContext().clientName === "bar",
      bar,
      split(
        (operation) => operation.getContext().clientName === "lockup",
        lockup,
        exchange
      )
    )
  )
);
