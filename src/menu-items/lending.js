// assets
import { IconDashboard } from "@tabler/icons";

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const lending = {
  id: "lending",
  title: "Lending",
  type: "group",
  children: [
    {
      id: "lending",
      title: "Lending",
      type: "item",
      url: "/lending",
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

export default lending;
