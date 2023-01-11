import { act, renderHook } from '@testing-library/react'

import { useThemeContext } from './theme.context'

describe('useThemeContext', () => {
  it('should init value is null', () => {
    const { result } = renderHook(useThemeContext, {})
    expect(result.current.colorMode).toBe(null)
  })
})
