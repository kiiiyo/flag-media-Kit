import { describe, expect, it } from '@jest/globals'
import { renderHook } from '@testing-library/react'

import { useThemeContext } from './theme.context'

describe('useThemeContext', () => {
  it('should init value is light', () => {
    const { result } = renderHook(useThemeContext, {})
    expect(result.current.colorMode).toBe('light')
  })
})
