import { useRef } from "react"

export default function UseRef(){
  const inputRef = useRef(null)

  function handleClick(){
    inputRef.current.focus()
  }
  
  return(
    <>
      <input 
        ref={inputRef} 
        style={{border: "2px solid blue", height: "40px", borderRadius: "4px", padding: "8px"}} 
        type="text" 
        placeholder="write something..." />
      <button onClick={handleClick}>click</button>
    </>
  )
}