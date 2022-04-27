/**
 * Color intention that you want to used in your theme
 * @param {JsonObject} theme Theme customization object
 */

export default function themePalette(theme) {
  return {
    mode: theme?.customization?.navType,
    common: {
      black: theme.colors?.darkPaper
    },
    default: {
      primary: theme.colors?.defaultPrimary,
      secondary: theme.colors?.defaultSecondary,

      appBar: theme.colors?.defaultAppBar,
      sidebar: theme.colors?.defaultSidebar,
      hoverColor: theme.colors?.defaultHoverColor
    },
    lending: {
      primary: theme.colors?.lendingPrimary,
      secondary: theme.colors?.lendingSecondary
    },
    pools: {
      primary: theme.colors?.poolsPrimary,
      secondary: theme.colors?.poolsSecondary
    },
    pairs: {
      primary: theme.colors?.pairsPrimary,
      secondary: theme.colors?.pairsSecondary
    },
    tokens: {
      primary: theme.colors?.tokensPrimary,
      secondary: theme.colors?.tokensSecondary
    },
    nft: {
      primary: theme.colors?.nftPrimary
    },

    // background: {
    //   paper: theme.paper,
    //   default: theme.backgroundPrimary
    // },
    gradients: {
      linGradient: theme.linGradient
    }
  };
}
