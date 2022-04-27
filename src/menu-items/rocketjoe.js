import { IconDashboard } from "@tabler/icons";

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const rocketjoe = {
  id: "rocketjoe",
  title: "sJOE",
  type: "group",
  children: [
    {
      id: "rocketjoe",
      title: "sJOE",
      type: "item",
      url: "/rocketjoe",
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

export default rocketjoe;
