import { createTheme } from '@vanilla-extract/css'

import { semanticToken } from './contract.css'
import { palette } from './tokens'

export const lightTheme = createTheme(semanticToken, {
  font: {
    color: {
      default: palette.gray800,
      subtle: palette.gray500,
      subtlest: palette.gray300,
      disable: palette.gray800,
      inset: palette.gray800,
      inverse: palette.gray800
    }
  },
  background: {
    color: {
      base: palette.gray100,
      layer1: palette.gray50,
      layer2: palette.white
    }
  },
  iconography: {
    color: {
      default: palette.gray800
    }
  },
  border: {
    color: {
      default: palette.gray200
    }
  },
  button: {
    regular: {
      backgroundColor: {
        default: palette.white,
        hover: palette.gray100,
        focus: palette.gray100,
        active: palette.gray100
      }
    }
  }
})
