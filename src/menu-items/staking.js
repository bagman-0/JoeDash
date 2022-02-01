// assets
import { IconDashboard } from "@tabler/icons";

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const staking = {
  id: "staking",
  title: "Staking",
  type: "group",
  children: [
    {
      id: "staking",
      title: "Staking",
      type: "item",
      url: "/staking",
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

export default staking;
