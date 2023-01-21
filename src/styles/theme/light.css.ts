import { createTheme } from '@vanilla-extract/css'

import { semanticToken } from './contract.css'
import { palette } from './tokens'

export const lightTheme = createTheme(semanticToken, {
  font: {
    color: {
      default: palette.gray900,
      subtle: palette.gray600,
      subtlest: palette.gray400,
      disable: palette.gray900,
      inset: palette.gray900,
      inverse: palette.gray900
    }
  },
  background: {
    color: {
      base: palette.gray200,
      layer1: palette.gray100,
      layer2: palette.white
    }
  },
  iconography: {
    color: {
      default: palette.gray900
    }
  },
  border: {
    color: {
      default: palette.gray300
    }
  },
  button: {
    regular: {
      backgroundColor: {
        default: palette.white,
        hover: palette.gray200,
        focus: palette.gray200,
        active: palette.gray200
      }
    }
  }
})
