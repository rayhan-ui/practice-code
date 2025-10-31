import { useContext } from "react";
import { useThemeContext } from "./UseContext";

export default function ThemeContext(){
    const {mode, setMode} = useContext(useThemeContext);
    return(
        <>
        <div style={{
            backgroundColor: mode === "dark"?"black":"white",
            color: mode === "dark"?"white":"black",
            padding: "2rem",
            marginTop: "1rem"
        }}>
            <h2>This is a {mode} theme</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>

            <button style={{cursor: "pointer"}} onClick={()=>{setMode(mode === "dark"?"light":"dark")}}>
                {mode === "dark"?"light":"dark"} mode
            </button>
        </div>
        </>
    )
}