import {
  Grid,
  Box,
  AvatarGroup,
  Typography,
  CardMedia,
  Card,
  CardContent,
  Avatar,
  CardHeader,
  CardActions,
  Button,
  Percentage
} from "@mui/material";

import { useTheme, alpha, styled } from "@mui/material/styles";

import { useState, useEffect } from "react";

import PairsAvatar from "./PairsAvatar";

const PoolCardContent = ({ rows, theme }) => (
  <Grid container direction="column">
    <Grid item>
      <Typography variant="h4" color={theme.palette.default.secondary}>
        Daily ROI:
{' '}
{Number(rows[0]?.roiPerDay).toFixed(3)}
      </Typography>
    </Grid>

    <Grid item>
      <Typography variant="h4" color={theme.palette.default.secondary}>
        Monthly ROI:
{' '}
{Number(rows[0]?.roiPerMonth).toFixed(3)}
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="h4" color={theme.palette.default.secondary}>
        Yearly ROI:
{' '}
{Number(rows[0]?.roiPerYear).toFixed(3)}
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="h4" color={theme.palette.default.secondary}>
        TVL:
{' '}
{Number(rows[0]?.tvl).toFixed(0)}
      </Typography>
    </Grid>
  </Grid>
);
const TopRows = ({ rows }) => {
  const theme = useTheme();

  return (
    <>
      {rows?.slice(0, 5)?.map((d) => (
        <Box
          sx={{
            backgroundColor: theme.palette.default.secondary,
            color: theme.palette.default.primary,
            overflow: "hidden",
            position: "relative",
            // overflowY: "scroll",
            variant: "outlined",
            maxHeight: 250,
            margin: theme.spacing(4),
            p: 3,
            borderRadius: 4
          }}
        >
          <Grid container direction="column">
            <Grid item>
              <Grid container direction="column">
                <Grid item>
                  <Typography variant="h3" color="inherit">
                    {d?.liquidityPair?.name}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h5" color="inherit">
                    Liquidity: $
                    {Math.round(Number(d?.liquidityPair?.reserveUSD))}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <PairsAvatar theme={theme} />
              </Grid>
            </Grid>
          </Grid>

          <Button
            size="small"
            variant="outlined"
            sx={{
              color: "#fff",
              backgroundColor: theme.palette.default?.primary
            }}
          >
            More
          </Button>
        </Box>
      ))}
    </>
  );
};
export default TopRows;
