import { Avatar, AvatarGroup, CardMedia } from "@mui/material";
import { useState, useEffect } from "react";

const handleImageError = (e) => {
  e.target.onerror = null;
  // e.target.style.display = 'none'
  e.target.src = "../../../assets/logo-white.svg";
};

const PairsAvatar = ({ theme }) => {
  const [pairImages, setPairImages] = useState([""]);

  useEffect(() => {
    async function getPairImages() {
      const pairUrls = await fetch(
        "https://api.coingecko.com/api/v3/coins/avalanche-2?sparkline=true"
      );
      setPairImages(pairUrls.json());
    }
    getPairImages();
  });
  console.log(pairImages);
  return (
    <AvatarGroup max={2} spacing={20}>
      <Avatar
        variant="rounded"
        sx={{
          width: 70,
          height: 70,
          borderRadius: "50px",
          backgroundColor: theme.palette.orange.light,
          color: theme.palette.orange.dark,
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
          backgroundColor: theme.palette.orange.light,
          color: theme.palette.orange.dark,
          marginLeft: 0,
          marginRight: 0
        }}
      >
        <CardMedia
          component="img"
          height="70"
          image={pairImages?.image?.small}
          alt="green iguana"
        />
      </Avatar>
    </AvatarGroup>
  );
};

export default PairsAvatar;
