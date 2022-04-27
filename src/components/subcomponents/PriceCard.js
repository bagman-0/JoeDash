import PropTypes from "prop-types";
import { useState, useEffect } from "react";

// material-ui
import { useTheme, styled } from "@mui/material/styles";
import { Box, Grid, Typography } from "@mui/material";

const PriceCard = ({ isLoading, data, name }) => {
  const theme = useTheme();

  const [timeValue, setTimeValue] = useState(false);
  const handleChangeTime = (event, newValue) => {
    setTimeValue(newValue);
  };
  return (
    <>
      <Box
        sx={{
          padding: 2.5,
          width: "200px",
          height: "75px",
          backgroundColor: theme.palette.default?.primary,
          borderRadius: 1,
          alignContent: "center",
          color: "#fff",
          overflow: "hidden",
          position: "relative",
          margin: theme.spacing(1)
        }}
      >
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: 500,
            color: theme.palette.gray50
          }}
        >
          {name}
{' '}
$
        </Typography>
      </Box>
    </>
  );
};

PriceCard.propTypes = {
  isLoading: PropTypes.bool
};

export default PriceCard;
