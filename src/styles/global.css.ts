import { globalStyle } from '@vanilla-extract/css'
import { globalToken } from '@/styles/theme'

globalStyle('body', {
  margin: globalToken.spacing.none,
  fontFamily: globalToken.font.fontFamily
})

globalStyle('.light > body', {
  backgroundColor: globalToken.palette.gray100,
  color: globalToken.palette.gray800
})

globalStyle('.dark > body', {
  backgroundColor: globalToken.palette.black,
  color: globalToken.palette.white
})
