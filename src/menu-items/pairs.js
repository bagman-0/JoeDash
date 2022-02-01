// assets
import { IconDashboard } from "@tabler/icons";

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const pairs = {
  id: "pairs",
  title: "Pairs",
  type: "group",
  children: [
    {
      id: "pairs",
      title: "Pairs",
      type: "item",
      url: "/pairs",
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

export default pairs;
