import { createThemeContract } from '@vanilla-extract/css'

export const semanticToken = createThemeContract({
  font: {
    color: {
      default: null,
      subtle: null,
      subtlest: null,
      disable: null,
      inset: null,
      inverse: null
    }
  },
  border: {
    color: {
      default: null
    }
  },
  iconography: {
    color: {
      default: null
    }
  },
  //
  surface: {
    // raised: {
    //   backgroundColor: {
    //     default: null,
    //     hovered: null,
    //     pressed: null
    //   }
    // },
    default: {
      bgColor: {
        normal: null,
        hovered: null,
        pressed: null
      }
    },
    sunken: {
      bgColor: {
        normal: null
      }
    }
  },
  button: {
    default: {
      bgColor: {
        normal: null,
        hovered: null,
        pressed: null
      }
    }
  }
})
