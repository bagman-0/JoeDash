// import { GraphQLClient, gql } from "graphql-request";
// // import SkeletonTotalOrderCard from '../../ui-component/cards/Skeleton/EarningCard'
// async function createJoeRequest(token) {
//   const contracts = {
//     joe: "0x6e84a6216ea6dacc71ee8e6b0a5b7322eebc0fdd",
//     avax: "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7",
//     somethingelse: "0xcontract"
//   };
//
//   const dayDataParams = {
//     id: "id",
//     price: "priceUSD",
//     volume: "volumeUSD"
//   };
//   const endpoint =    "https://api.thegraph.com/subgraphs/name/traderjoe-xyz/exchange";
//   const msOneWeek = 604800000 * 5;
//   const weekDate = (Date.now() - msOneWeek) / 1000;
//   const vars = {
//     contract: contracts[token],
//     startDate: parseInt(weekDate, 10),
//     endDate: parseInt(Date.now() / 1000, 10)
//   };
//
//   const graphQLClient = new GraphQLClient(endpoint);
//   const baseQuery = gql`
//     query token($contract: String!, $startDate: Int!, $endDate: Int!) {
//       token(id: $contract) {
//         dayData(
//           orderBy: date
//           first: 100
//           where: { date_gt: $startDate, date_lt: $endDate }
//         ) {
//           date
//           liquidityUSD
//           priceUSD
//           volumeUSD
//         }
//       }
//       pairs(
//         where: {
//           token0: "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7"
//           id: "0xed8cbd9f0ce3c6986b22002f03c6475ceb7a6256"
//         }
//       ) {
//         id
//         token0 {
//           symbol
//         }
//         token1 {
//           symbol
//         }
//         reserve0
//         reserve1
//         volumeUSD
//         volumeToken0
//         volumeToken1
//         name
//
//         untrackedVolumeUSD
//       }
//     }
//   `;
//
//   return graphQLClient.request(baseQuery, vars);
// }
// // [HourData!]!
// // skip: Int = 0
// // first: Int = 100
// // orderBy: HourData_orderBy
// // orderDirection: OrderDirection
// // where: HourData_filter
// // var d = new Date(timestamp*1000);
//
// // DayData_filter (where: ____)
// // id: ID
// // id_not: ID
// // id_gt: ID
// // id_lt: ID
// // id_gte: ID
// // id_lte: ID
// // id_in: [ID!]
// // id_not_in: [ID!]
// // date: Int
// // date_not: Int
// // date_gt: Int
// // date_lt: Int
// // date_gte: Int
// // date_lte: Int
// // date_in: [Int!]
// // date_not_in: [Int!]
// // async function getJoePairData(data) {
// //   const pairData =;
// //   return pairData;
// // }
// async function getJoeDayData(token) {
//   const data = await createJoeRequest(token);
//
//   const filteredData = data.token.dayData;
//   filteredData.forEach((item) => {
//     item.date = new Date(item.date * 1000).toISOString().split("T")[0];
//     item.priceUSD = Number(item.priceUSD).toFixed(2);
//     item.volumeUSD = Number(item.volumeUSD).toFixed(1);
//     item.liquidityUSD = Number(item.liquidityUSD).toFixed(1);
//     item.pairs = data.pairs;
//   });
//
//   return filteredData;
// }
//
// export default getJoeDayData;
