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
  iconography: {
    color: {
      default: palette.gray600
    }
  },
  border: {
    color: {
      default: palette.gray300,
      subtle: palette.gray200,
      subtlest: palette.gray100
    }
  },
  surface: {
    default: {
      bgColor: {
        normal: palette.white,
        hovered: palette.gray200,
        pressed: palette.gray300
      }
    },
    sunken: {
      bgColor: {
        normal: palette.gray200
      }
    }
  },
  button: {
    default: {
      bgColor: {
        normal: palette.white,
        hovered: palette.gray200,
        pressed: palette.gray300
      }
    }
  }
})
