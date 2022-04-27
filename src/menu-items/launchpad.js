// assets
import { IconDashboard } from "@tabler/icons";

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const launchpad = {
  id: "launchpad",
  title: "Launchpad",
  type: "group",
  children: [
    {
      id: "launches",
      title: "Launchpad",
      type: "collapse",
      url: "/launchpad",
      icon: icons.IconDashboard,
      breadcrumbs: false,

      children: [
        {
          id: "hon",
          title: "hon",
          type: "item",
          url: "/hon",
          icon: icons.IconDashboard,
          breadcrumbs: false
        },
        {
          id: "fief",
          title: "fief",
          type: "item",
          url: "/fief",
          icon: icons.IconDashboard,
          breadcrumbs: false
        }
      ]
    }
  ]
};

export default launchpad;
