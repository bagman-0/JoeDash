import { useRoutes } from "react-router-dom";
import { lazy } from "react";

// project imports
import MainLayout from "../components/MainLayout";
import Loadable from "../components/subcomponents/Loadable";

// routes
import config from "config";

// dashboard routing

const Dash = Loadable(lazy(() => import("pages/Dash")));
const Lending = Loadable(lazy(() => import("pages/Lending")));

const Pools = Loadable(lazy(() => import("pages/Pools")));

const Pairs = Loadable(lazy(() => import("pages/Pairs")));
const JoeStakes = Loadable(lazy(() => import("pages/JoeStakes")));
const RocketJoe = Loadable(lazy(() => import("pages/RocketJoe")));
const StableJoe = Loadable(lazy(() => import("pages/StableJoe")));
const VEJoe = Loadable(lazy(() => import("pages/veJOE")));
const NFT = Loadable(lazy(() => import("pages/NFT")));
const Launchpad = Loadable(lazy(() => import("pages/Launchpad")));
const Tokens = Loadable(lazy(() => import("pages/Tokens")));

// ==============================|| ROUTING RENDER ||============================== //
const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    { path: "/", element: <Dash /> },
    { path: "/dex", element: <Dash /> },
    { path: "/lending", element: <Lending /> },
    { path: "/tokens", element: <Tokens /> },
    { path: "/joes", element: <JoeStakes /> },
    { path: "/rocketjoe", element: <RocketJoe /> },
    { path: "/stablejoe", element: <StableJoe /> },
    { path: "/vejoe", element: <VEJoe /> },
    { path: "/nft", element: <NFT /> },

    { path: "/pairs", element: <Pairs /> },
    { path: "/pools", element: <Pools /> }
  ]
};

export default function ThemeRoutes() {
  console.log(MainRoutes);
  return useRoutes([MainRoutes], config.basename);
}
