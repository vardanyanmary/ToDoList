import { createContext } from 'react'
import useCreateThemeContext from './useCreateThemeContext'

type TThemeContext = ReturnType<typeof useCreateThemeContext>

export const ThemeContext = createContext<TThemeContext>({} as TThemeContext)