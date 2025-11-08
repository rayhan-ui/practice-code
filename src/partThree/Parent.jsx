import { useState } from "react"
import Child from "./Child"

export default function Parent(){
    const [count, setCount] = useState(0)

    return(

        <>
        <Child 
        count = {count}  
        increment={()=>{setCount(c=>c+1)}}
        decrement={()=>{setCount(c=>c-1)}}
        reset = {()=>{setCount(0)}}
        />
        </>
    )
}