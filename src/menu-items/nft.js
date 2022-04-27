// assets
import { IconDashboard } from "@tabler/icons";

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const nft = {
  id: "nft",
  title: "nft",
  type: "group",
  children: [
    {
      id: "nftpages",
      title: "NFT Marketplace",
      type: "item",
      url: "/nft",
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

export default nft;
