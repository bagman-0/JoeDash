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
import MainCard from "ui-component/cards/MainCard";

import { useTheme, alpha, styled } from "@mui/material/styles";

import { useState, useEffect } from "react";

import PoolCardContent from "./poolCardContent";
import PairsAvatar from "./pairsAvatar";

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.secondary[800],
  color: theme.palette.secondary.dark,
  overflow: "hidden",
  position: "relative",
  variant: "outlined<!--  -->",
  maxHeight: 250,
  margin: theme.spacing(4),
  "&>div": {
    position: "relative",
    zIndex: 3
  },

  "&:before": {
    content: '""',
    position: "absolute",
    zIndex: 0,
    width: 500,
    height: 500,
    background: theme.palette.primary[200],
    borderRadius: "50%",
    top: -100,
    right: -300,
    opacity: 0.3,
    [theme.breakpoints.down("sm")]: {
      top: -155,
      right: -70
    }
  }
}));

const TopRows = ({ rows }) => {
  // const [rowsData, setRowsData] = useState([0]);
  // useEffect(() => setRowsData(rows), [rows]);
  const theme = useTheme();
  // console.log(rows);
  // <PoolCardContent rows={rows} theme={theme} />
  return (
    <>
      <CardWrapper>
        <Box>
          <Grid container direction="column">
            <Grid item>
              <Grid container direction="column">
                <Grid item>
                  <Typography variant="h3" color="inherit">
                    {rows?.map((d) => d?.liquidityPair?.name)}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h5" color="inherit">
                    Liquidity: $
                    {Math.round(
                      Number(rows?.map((d) => d?.liquidityPair?.reserveUSD))
                    )}
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
              backgroundColor: theme.palette.secondary[200]
            }}
          >
            More
          </Button>
        </Box>
      </CardWrapper>
    </>
  );
};
export default TopRows;
