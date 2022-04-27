// assets
import { IconDashboard } from "@tabler/icons";

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const documentation = {
  id: "documentaion",
  title: "documentaion",
  type: "group",
  children: [
    {
      id: "documentaion",
      title: "Documentaion",
      type: "item",
      url: "/documentaion",
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

export default documentation;
