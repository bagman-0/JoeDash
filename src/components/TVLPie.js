import { Pie, Cell, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles";
import { useState, useEffect } from "react";

import chroma from "chroma-js";

const dataCalcs = async (data) => {
  const pieD = await data?.map((d) => ({
    name: d?.liquidityPair?.name,
    tvl: d?.tvl,
    volume: Number(d?.liquidityPair?.volumeUSD)
  }));
  return pieD.slice(0, 5);
};
const colors = chroma.scale(["#4000ff", "#7100ca"]).mode("lch").colors(5);

const TVLPie = ({ data }) => {
  const theme = useTheme();

  // fill = "url(#colortvl)";

  return (
    <>
      <Box
        sx={{
          height: "400px",
          background: theme
            .transparent(theme.palette.default.primary, 0.7)
            .hex(),
          boxShadow: "0px 0px 20px 10px rgb(27, 18, 107, 0.7)",
          px: 1
        }}
      >
        <Box
          sx={{
            background: "transparent",
            justifyContent: "flex-end",
            pt: 2
          }}
        >
          <Typography
            variant="h1"
            align="right"
            sx={{
              pr: 4,
              textShadow: "0 0 5px #1b126b, 0 0 10px #fff, 0 0 15px #fff"
            }}
          >
            Reserves USD
          </Typography>
          <Typography variant="h2" align="right" sx={{ pr: 4, pt: 1 }}>
            $
{data && Math.round(Number(data[3]?.volumeUSD))}
          </Typography>
        </Box>
        <ResponsiveContainer height={250} width={500}>
          <PieChart>
            <Pie
              data={
                data
                && data
                  ?.map((d) => ({
                    name: d?.liquidityPair?.name,
                    tvl: d?.tvl,
                    volume: Number(d?.liquidityPair?.volumeUSD)
                  }))
                  ?.sort((a, b) => b?.tvl - a?.tvl)
              }
              dataKey="tvl"
              nameKey="name"
              cx="30%"
              cy="30%"
              outerRadius={40}
            >
              {data
                && data?.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
            </Pie>
            <Pie
              data={
                data
                && data
                  ?.map((d) => ({
                    name: d?.liquidityPair?.name,
                    tvl: d?.tvl,
                    volume: Number(d?.liquidityPair?.volumeUSD)
                  }))
                  ?.sort((a, b) => b?.volume - a?.volume)
              }
              dataKey="volume"
              nameKey="name"
              cx="30%"
              cy="30%"
              innerRadius={50}
              outerRadius={60}
              label
            >
              {data
                && data?.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </>
  );
};

export default TVLPie;
