import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import Box from "@mui/material/Box";
import { styled, useTheme } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { getPools } from "../../../core/api";

// const CardWrapper = styled(MainCard)(({ theme }) => ({
//   overflow: "hidden",
//   position: "relative",
//   "&:after": {
//     content: '""',
//     position: "absolute",
//     width: 210,
//     height: 210,
//     background: `linear-gradient(210.04deg, ${theme.palette.warning.dark} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
//     borderRadius: "50%",
//     top: -30,
//     right: -180
//   },
//   "&:before": {
//     content: '""',
//     position: "absolute",
//     width: 210,
//     height: 210,
//     background: `linear-gradient(140.9deg, ${theme.palette.warning.dark} -14.02%, rgba(144, 202, 249, 0) 70.50%)`,
//     borderRadius: "50%",
//     top: -160,
//     right: -130
//   }
// }));

const dataCalcs = async (data) => {
  const pieD = await data?.map((d) => ({
    name: d?.liquidityPair?.name,
    tvl: d?.tvl,
    volume: Number(d?.liquidityPair?.volumeUSD)
  }));
  return pieD;
};

const TVLPie = ({ data }) => {
  const theme = useTheme();
  const [pieData, setPieData] = useState([0]);

  useEffect(() => {
    async function formatPieData(d) {
      console.log(d);
      const dd = await dataCalcs(d);
      setPieData(dd);
    }
    formatPieData(data);
  }, [data]);

  // fill = "url(#colortvl)";
  console.log(pieData);
  return (
    <Box
      display="flex"
      flex-direction="row-reverse"
      sx={{
        boxShadow: "0px 0px 20px 10px rgb(27, 18, 107, 0.7)",
        bgcolor: theme.palette.primary.dark,
        height: 365,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <ResponsiveContainer height={250} width={500}>
        <PieChart width={400} height={400}>
          <defs>
            <linearGradient id="colortvl" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2414b5" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ffb108" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <Pie
            data={pieData?.sort((a, b) => b?.tvl - a?.tvl)}
            dataKey="tvl"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="rgb(121, 134, 203, 0.8)"
          />
          <Pie
            data={pieData?.sort((a, b) => b?.volume - a?.volume)}
            dataKey="volume"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            fill="rgb(0, 149, 255, 0.9)"
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default TVLPie;
