import { createTheme } from '@vanilla-extract/css'
import { themeToken } from './contract.css'
import { PALETTE } from './tokens'

export const lightTheme = createTheme(themeToken, {
  font: {
    color: {
      default: PALETTE.gray800
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
  }
})
