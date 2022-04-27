import { Typography } from "@mui/material/Typography";
import { useTheme } from "@material-ui/core/styles";

const Percent = ({ number, ...props }) => {
  // takes number in percent form and formats+styles
  const theme = useTheme();
  const value =    !Number.isNaN(number) && Number.isFinite(number)
      ? Number(number).toFixed(2)
      : 0;
  return (
<Typography>
{value}
%
</Typography>
);
};
