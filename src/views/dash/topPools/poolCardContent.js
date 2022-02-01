import { Grid, Typography } from "@mui/material";

const PoolCardContent = ({ rows, theme }) => (
  <Grid container direction="column">
    <Grid item>
      <Typography variant="h4" color={theme.palette.secondary.light}>
        Daily ROI:
{' '}
{Number(rows[0]?.roiPerDay).toFixed(3)}
      </Typography>
    </Grid>

    <Grid item>
      <Typography variant="h4" color={theme.palette.primary.light}>
        Monthly ROI:
{' '}
{Number(rows[0]?.roiPerMonth).toFixed(3)}
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="h4" color={theme.palette.secondary.light}>
        Yearly ROI:
{' '}
{Number(rows[0]?.roiPerYear).toFixed(3)}
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="h4" color={theme.palette.secondary.light}>
        TVL:
{' '}
{Number(rows[0]?.tvl).toFixed(0)}
      </Typography>
    </Grid>
  </Grid>
);

export default PoolCardContent;
