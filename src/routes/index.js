import { useRoutes } from "react-router-dom";

// routes
import MainRoutes from "./MainRoutes";
import config from "config";

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  console.log(MainRoutes);
  return useRoutes([MainRoutes], config.basename);
}
