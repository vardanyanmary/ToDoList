import { ThemeContext } from "./ThemeContext"
import useCreateThemeContext from "./useCreateThemeContext"


interface ThemeProviderProps {
    children: React.ReactNode
}


export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const themeContext = useCreateThemeContext()

    return (
        <ThemeContext.Provider value={themeContext}>
            {children}
        </ThemeContext.Provider>
    )
}