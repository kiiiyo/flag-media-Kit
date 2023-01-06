import { globalStyle } from '@vanilla-extract/css'
import { globalToken } from '@/styles/theme'

globalStyle('body', {
  margin: globalToken.spacing.none
})

globalStyle('.light > body', {
  backgroundColor: globalToken.palette.gray100
})

globalStyle('.dark > body', {
  backgroundColor: globalToken.palette.gray900
})
