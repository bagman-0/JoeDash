// ===========================|| DASHBOARD - BAJAJ AREA CHART ||=========================== //
import { GraphQLClient, gql } from 'graphql-request';

async function createJoeRequest(token) {
    const contracts = {
        joe: '0x6e84a6216ea6dacc71ee8e6b0a5b7322eebc0fdd',
        something: '0x09ad4a1746ab9ecc96bb67d919de3c6b54cc879f',
        somethingelse: '0xcontract'
    };

    const dayDataParams = {
        id: 'id',
        price: 'priceUSD',
        volume: 'volumeUSD'
    };
    const endpoint = 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/exchange';

    const vars = {
        contract: contracts[token]
    };
    const graphQLClient = new GraphQLClient(endpoint);
    const baseQuery = gql`
        query token($contract: String!) {
            token(id: $contract) {
                dayData(orderBy: date) {
                    id
                    date
                    priceUSD
                    volumeUSD
                    liquidityUSD
                }
                liquidity
            }
            avaxprice: bundle(id: 1) {
                avaxPrice
            }
        }
    `;

    return graphQLClient.request(baseQuery, vars);
}

async function getJoeDayData() {
    const data = await createJoeRequest('joe');
    const priceArr = [];
    const dateArr = [];
    const datas = await data.token.dayData.map(async (element) => {
        if (element.volumeUSD > 500000) {
            priceArr.push(element.priceUSD);
            dateArr.push(new Date(element.date * 1000).toISOString().split('T')[0]);
        }
    });
    const d = { data: priceArr };

    // return datas;
    return d;
}

export default getJoeDayData;
