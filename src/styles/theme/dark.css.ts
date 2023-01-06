import { createTheme } from '@vanilla-extract/css'
import { themeToken } from './contract.css'

export const darkTheme = createTheme(themeToken, {
  textColor: '#fff'
})
