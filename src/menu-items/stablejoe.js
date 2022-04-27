import { IconDashboard } from "@tabler/icons";

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const stablejoe = {
  id: "stablejoe",
  title: "sJOE",
  type: "group",
  children: [
    {
      id: "stablejoe",
      title: "sJOE",
      type: "item",
      url: "/stablejoe",
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

export default stablejoe;
