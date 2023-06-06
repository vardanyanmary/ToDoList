import { useState } from "react";

export type Theme = 'dark' | 'light'

function useCreateThemeContext() {
	const [theme, setTheme] = useState<Theme>('dark');

    // theme changes hook , petq chi amen angam nuyn texy sarqel,
    // asenq themeSwitcheri mej , menq karanq iran mi angam hooki 
    // mej sarqenq u asenq guyny poxi 

    const toggleTheme = () => setTheme(
        prev => prev === 'light'
          ? 'dark'
          : 'light'
      )

    return {
        theme,
        toggleTheme
    }
}

export default useCreateThemeContext