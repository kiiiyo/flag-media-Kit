import { createTheme } from '@vanilla-extract/css'
import { themeToken } from './contract.css'

export const lightTheme = createTheme(themeToken, {
  font: {
    color: {
      default: '#000'
    }
  }
})
