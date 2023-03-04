import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'

import { darkTheme, lightTheme } from '@/styles/theme'

type ColorMode = 'dark' | 'light'

type ThemeContextValue = {
  colorMode: ColorMode
  // eslint-disable-next-line no-unused-vars
  handleChangeColorMode?: (colorMode: ColorMode) => void
}

const initContextValue: ThemeContextValue = {
  colorMode: 'light',
  handleChangeColorMode: () => ({})
}

export const ThemeContext = createContext<ThemeContextValue>(initContextValue)

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [colorMode, setColorMode] = useState<ColorMode>('light')

  useEffect(() => {
    setColorMode(
      document.documentElement.classList.contains('light') ? 'light' : 'dark'
    )
  }, [])

  const handleChangeColorMode = useCallback((colorMode: ColorMode) => {
    document.documentElement.classList.remove('dark', 'light')
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
