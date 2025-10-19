import { useState } from "react";

export default function ConditionalRendering(){
    const [on, setOn] = useState(false);
    const name = "Rayhan"

  return(
    <>
      <h1 >Conditional Rendering example:</h1>
      <button onClick={() => setOn(!on)}>Log {on?"out":"in"}</button>
      {on ? <h2>Welcome back, {name}!</h2> : <h2>Please log in.</h2>}
    </>
  );
}