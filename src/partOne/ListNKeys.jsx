import { useState } from "react"

export default function ListNKeys(){

    const [generate, setGenerate] = useState(randomNumber())

  function randomNumber(){
    return [...Array(10)].map(() => Math.floor(Math.random() * 10))
  }
            console.log(generate)
    
     return (
        <>
         <h1>this is list and keys example:</h1>
         <ul>
            {generate.map((num, index)=><li key={index}> {num}</li>)}
         </ul>
         <button onClick={()=>{setGenerate(randomNumber())}}>regenerate</button>
        </>
  )
}