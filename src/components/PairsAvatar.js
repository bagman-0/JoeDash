import { Avatar, AvatarGroup, CardMedia } from "@mui/material";
import { useState, useEffect } from "react";

const handleImageError = (e) => {
  e.target.onerror = null;
  // e.target.style.display = 'none'
  e.target.src = "../../../assets/logo-white.svg";
};

const PairsAvatar = ({ theme, images }) => {
  const x = 0;
  return (
    <AvatarGroup max={2} spacing={20}>
      <Avatar
        variant="rounded"
        sx={{
          width: 70,
          height: 70,
          borderRadius: "50px",
          backgroundColor: theme.palette.default.secondary,
          color: theme.palette.primary.dark,
          marginLeft: 0,
          marginRight: 0
        }}
      >
        <CardMedia
          onError={handleImageError}
          component="img"
          height="70"
          image="https://assets.coingecko.com/coins/images/12559/small/coin-round-red.png?1604021818"
          alt="green iguana"
        />
      </Avatar>

      <Avatar
        variant="rounded"
        sx={{
          width: 70,
          height: 70,
          borderRadius: "50px",
          backgroundColor: theme.palette.default.secondary,
          color: theme.palette.default.primary,
          marginLeft: 0,
          marginRight: 0
        }}
      >
        <CardMedia
          component="img"
          height="70"
          image={images?.image?.small}
          alt="green iguana"
        />
      </Avatar>
    </AvatarGroup>
  );
};

export default PairsAvatar;
