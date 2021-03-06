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
    // {
    //   id: "stakingjoe",
    //   title: "JOE Stakes",
    //   type: "item",
    //   url: "/joes",
    //   icon: icons.IconDashboard,
    //   breadcrumbs: false
    // },
    {
      id: "stakingjoe",
      title: "JOE Stakes",
      type: "collapse",
      url: "/joes",
      icon: icons.IconDashboard,
      breadcrumbs: false,

      children: [
        {
          id: "stablejoe",
          title: "sJOE",
          type: "item",
          url: "/stablejoe",
          icon: icons.IconDashboard,
          breadcrumbs: false
        },
        {
          id: "rocketjoe",
          title: "rJOE",
          type: "item",
          url: "/rocketjoe",
          icon: icons.IconDashboard,
          breadcrumbs: false
        },
        {
          id: "vejoe",
          title: "veJOE",
          type: "item",
          url: "/vejoe",
          icon: icons.IconDashboard,
          breadcrumbs: false
        }
      ]
    }
  ]
};

export default staking;
