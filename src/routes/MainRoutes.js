import { lazy } from "react";

// project imports
import MainLayout from "layout/MainLayout";
import Loadable from "ui-component/Loadable";

// dashboard routing
// const DashboardDefault = Loadable(
//   lazy(() => import("views/dashboard/Default"))
// );
const Dash = Loadable(lazy(() => import("views/dash/dash")));
const LendingPage = Loadable(lazy(() => import("views/lending/LendingPage")));

const PoolsPage = Loadable(lazy(() => import("views/pools/PoolsPage")));

const PairsPage = Loadable(lazy(() => import("views/pairs/PairsPage")));

const TokensPage = Loadable(lazy(() => import("views/tokens/TokensPage")));
const StakingPage = Loadable(lazy(() => import("views/staking/StakingPage")));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    { path: "/", element: <Dash /> },
    { path: "/dash", element: <Dash /> },

    { path: "/lending", element: <LendingPage /> },
    { path: "/tokens", element: <TokensPage /> },
    { path: "/staking", element: <StakingPage /> },
    { path: "/pairs", element: <PairsPage /> },
    { path: "/pools", element: <PoolsPage /> }
  ]
};

export default MainRoutes;
