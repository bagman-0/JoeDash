// assets
import { IconDashboard } from "@tabler/icons";

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const pools = {
  id: "pools",
  title: "Pools",
  type: "group",
  children: [
    {
      id: "pools",
      title: "Pools",
      type: "item",
      url: "/pools",
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

export default pools;
