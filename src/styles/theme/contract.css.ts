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
  },
  button: {
    regular: {
      backgroundColor: {
        default: null,
        hover: null,
        focus: null,
        active: null
      }
    }
  }
})
