import { createContext, useState } from "react"
import ThemeContext from "./ThemeContext";

export const useThemeContext = createContext();

export default function UseContext(){
    const [mode, setMode] = useState('dark')
    return (
        <>
            <h1>Use Context</h1>
            <useThemeContext.Provider value = {{mode, setMode}}>
                <ThemeContext />
            </useThemeContext.Provider>
        </>
    )
}