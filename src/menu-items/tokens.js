// assets
import { IconDashboard } from "@tabler/icons";

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const tokens = {
  id: "tokens",
  title: "Tokens",
  type: "group",
  children: [
    {
      id: "tokens",
      title: "Tokens",
      type: "item",
      url: "/tokens",
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

export default tokens;
