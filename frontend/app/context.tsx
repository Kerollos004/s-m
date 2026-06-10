//darkmode context
"use client"
import { Dispatch, SetStateAction , createContext, useContext , useState , ReactNode } from "react"


interface Mode {
    mode: string
    setMode: Dispatch <SetStateAction<string>>
}

//create context

const themeContext = createContext<Mode | null>(null)

export const useThemeContext = () => {
    const context = useContext(themeContext)

    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context
}

//ThemeProvider
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [mode, setMode] = useState<string>("light");
    return (
        <themeContext.Provider value={{ mode, setMode }}>
            {children}
        </themeContext.Provider>
    );
};