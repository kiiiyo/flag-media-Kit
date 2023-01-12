import { useThemeContext } from '@/features'

export const useHeaderPresenter = () => {
  const { colorMode, handleChangeColorMode } = useThemeContext()
  return { colorMode, handleChangeColorMode } as const
}
