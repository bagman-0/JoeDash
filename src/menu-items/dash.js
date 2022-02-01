// assets
import { IconDashboard } from "@tabler/icons";

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dash = {
  id: "dash",
  title: "Dash",
  type: "group",
  children: [
    {
      id: "dash",
      title: "Dash",
      type: "item",
      url: "/dash",
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

export default dash;
