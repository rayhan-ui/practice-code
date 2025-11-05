import { useEffect, useState } from "react"

export default function LocalStorenSessionMng(){

    const [mode, setMode] = useState(()=>{
        const saved = localStorage.getItem("mode")
        return saved || "light"
    })


    useEffect(()=>{
        localStorage.setItem("mode", mode)
    }, [mode])

    return(
        <>
            <h1>mode: {mode}</h1>
            <button onClick={()=>{setMode(mode === "light"?"dark":"light")}}>change mode</button>
            
            
        </>
    )
}