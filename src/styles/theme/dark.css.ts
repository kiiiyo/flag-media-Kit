import { createTheme } from '@vanilla-extract/css'

import { themeToken } from './contract.css'
import { PALETTE } from './tokens'

export const darkTheme = createTheme(themeToken, {
  font: {
    color: {
      default: PALETTE.white,
      subtle: PALETTE.gray400,
      subtlest: PALETTE.gray600,
      disable: PALETTE.white,
      inset: PALETTE.white,
      inverse: PALETTE.white
    }
  },
  background: {
    color: {
      base: PALETTE.black,
      layer1: PALETTE.gray900,
      layer2: PALETTE.gray800
    }
  },
  iconography: {
    color: {
      default: PALETTE.white
    }
  },
  border: {
    color: {
      default: PALETTE.gray600
    }
  },
  button: {
    regular: {
      backgroundColor: {
        default: PALETTE.gray700,
        hover: PALETTE.gray800,
        focus: PALETTE.gray800,
        active: PALETTE.gray800
      }
    }
  }
})
