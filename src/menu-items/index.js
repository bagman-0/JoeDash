import dash from "./dash";
import dex from "./dex";
import lending from "./lending";
import pools from "./pools";
import pairs from "./pairs";
import staking from "./staking";
import tokens from "./tokens";
import documentation from "./documentation";
import nft from "./nft";
import launchpad from "./launchpad";

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [dex, staking, launchpad, nft, tokens, documentation]
};

export default menuItems;
