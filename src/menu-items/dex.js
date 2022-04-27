// assets
import { IconDashboard } from "@tabler/icons";

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dex = {
  id: "dex",
  title: "dex",
  type: "group",
  children: [
    {
      id: "dexpages",
      title: "DEX",
      type: "collapse",
      url: "/dex",
      icon: icons.IconDashboard,
      breadcrumbs: false,

      children: [
        {
          id: "dexlending",
          title: "lending",
          type: "item",
          url: "/lending",
          icon: icons.IconDashboard,
          breadcrumbs: false
        },
        {
          id: "dexpairs",
          title: "pairs",
          type: "item",
          url: "/pairs",
          icon: icons.IconDashboard,
          breadcrumbs: false
        },
        {
          id: "dexpools",
          title: "pools",
          type: "item",
          url: "/pools",
          icon: icons.IconDashboard,
          breadcrumbs: false
        }
      ]
    }
  ]
};

export default dex;
