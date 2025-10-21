import { useEffect, useState } from "react"

export default function UseEffect(){
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(()=>{
        window.addEventListener("resize", resizeWidth)
        return()=>{
            window.removeEventListener("resize", resizeWidth)
        }
    }, [])

    function resizeWidth(){
        setWidth(window.innerWidth)
    }

    return(
        <>
            <h1>Window width: {width}px</h1>
        </>
    )
}