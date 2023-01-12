import { createThemeContract } from '@vanilla-extract/css'

export const themeToken = createThemeContract({
  font: {
    color: {
      default: null
    }
  },
  background: {
    color: {
      base: null,
      layer1: null,
      layer2: null
    }
  },
  iconography: {
    color: {
      default: null
    }
  }
})
