import { useEffect, useState } from "react"

export default function Loading(){
    const [loading, setLoading] = useState(true)
    const users = ["Rayhan", "rakib", "joya"]

    useEffect(()=>{
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2000);

        return()=>clearTimeout(timer)
    },[])
    return(
        <>
        {loading ? <p>loading...</p> : 
        <ul>{users.map((item)=><li>{item}</li>)}</ul>}
        </>
    )
}