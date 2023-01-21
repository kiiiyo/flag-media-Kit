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
  // background: {
  //   color: {
  //     base: palette.black,
  //     layer1: palette.gray1000,
  //     layer2: palette.gray900
  //   }
  // },
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
  surface: {
    default: {
      bgColor: {
        normal: palette.gray900,
        hovered: palette.gray900,
        pressed: palette.gray900
      }
    },
    sunken: {
      bgColor: {
        normal: palette.black
      }
    }
  },
  button: {
    default: {
      bgColor: {
        normal: palette.gray900,
        hovered: palette.gray800,
        pressed: palette.gray700
      }
    }
  }
})
