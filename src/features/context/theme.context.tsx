import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState} from 'react'

import { darkTheme, lightTheme } from '@/styles/theme'

type ColorMode = 'dark' | 'light'

type ThemeContextValue = {
  colorMode: ColorMode | null
  handleChangeColorMode?: (colorMode: ColorMode) => void
}

const initContextValue: ThemeContextValue = {
  colorMode: null,
  handleChangeColorMode: () => ({})
}

export const ThemeContext = createContext<ThemeContextValue>(initContextValue)

export const ThemeContextProvider = ({
  children
}: {
  colorMode?: ColorMode
  children: ReactNode
}) => {
  const [colorMode, setColorMode] = useState<ColorMode | null>(null)

  useEffect(() => {
    setColorMode(
      document.documentElement.classList.contains('light') ? 'light' : 'dark'
    )
  }, [])

  const handleChangeColorMode = useCallback((colorMode: ColorMode) => {
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(colorMode)
    setColorMode(colorMode)
  }, [])

  return (
    <ThemeContext.Provider value={{ colorMode, handleChangeColorMode }}>
      <div className={colorMode === 'light' ? lightTheme : darkTheme}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export const useThemeContext = (): ThemeContextValue => {
  const { colorMode, handleChangeColorMode } = useContext(ThemeContext)
  return {
    colorMode,
    handleChangeColorMode
  } as const
}
