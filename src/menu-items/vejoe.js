import { IconDashboard } from "@tabler/icons";

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const vejoe = {
  id: "vejoe",
  title: "sJOE",
  type: "group",
  children: [
    {
      id: "vejoe",
      title: "veJOE",
      type: "item",
      url: "/vejoe",
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

export default vejoe;
