import { createTheme } from '@vanilla-extract/css'

import { semanticToken } from './contract.css'
import { palette } from './tokens'

export const darkTheme = createTheme(semanticToken, {
  font: {
    color: {
      default: palette.white,
      subtle: palette.gray400,
      subtlest: palette.gray600,
      disable: palette.white,
      inset: palette.white,
      inverse: palette.white
    }
  },
  background: {
    color: {
      base: palette.black,
      layer1: palette.gray900,
      layer2: palette.gray800
    }
  },
  iconography: {
    color: {
      default: palette.white
    }
  },
  border: {
    color: {
      default: palette.gray600
    }
  },
  button: {
    regular: {
      backgroundColor: {
        default: palette.gray700,
        hover: palette.gray800,
        focus: palette.gray800,
        active: palette.gray800
      }
    }
  }
})
