import { createThemeContract } from '@vanilla-extract/css'

export const themeToken = createThemeContract({
  font: {
    color: {
      default: null
    }
  }
})
