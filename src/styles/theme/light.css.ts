import { createTheme } from '@vanilla-extract/css'
import { themeToken } from './contract.css'
import { PALETTE } from './tokens'

export const lightTheme = createTheme(themeToken, {
  font: {
    color: {
      default: PALETTE.gray800,
      subtle: PALETTE.gray500,
      subtlest: PALETTE.gray300,
      disable: PALETTE.gray800,
      inset: PALETTE.gray800,
      inverse: PALETTE.gray800
    }
  },
  background: {
    color: {
      base: PALETTE.gray100,
      layer1: PALETTE.gray50,
      layer2: PALETTE.white
    }
  },
  iconography: {
    color: {
      default: PALETTE.gray800
    }
  },
  border: {
    color: {
      default: PALETTE.gray200
    }
  },
  button: {
    regular: {
      backgroundColor: {
        default: PALETTE.white,
        hover: PALETTE.gray100,
        focus: PALETTE.gray100,
        active: PALETTE.gray100
      }
    }
  }
})
