import { createTheme } from '@vanilla-extract/css'

import { semanticToken } from './contract.css'
import { palette } from './tokens'

export const darkTheme = createTheme(semanticToken, {
  font: {
    color: {
      default: palette.white,
      subtle: palette.gray500,
      subtlest: palette.gray700,
      disable: palette.white,
      inset: palette.white,
      inverse: palette.white
    }
  },
  background: {
    color: {
      base: palette.black,
      layer1: palette.gray1000,
      layer2: palette.gray900
    }
  },
  iconography: {
    color: {
      default: palette.white
    }
  },
  border: {
    color: {
      default: palette.gray700
    }
  },
  button: {
    regular: {
      backgroundColor: {
        default: palette.gray800,
        hover: palette.gray900,
        focus: palette.gray900,
        active: palette.gray900
      }
    }
  }
})
