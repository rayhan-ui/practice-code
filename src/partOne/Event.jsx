import { useState } from "react";

export default function Event(){
    const [color, setColor] = useState(false);
  return(
    <div>
      <button style={{ background: color ? "white" : "black", height: "40px", width: "300px", border: "none", borderRadius: "5px", cursor: "pointer", color: color ? "black" : "white" }} onClick={() => setColor(!color)}>Click this button for changing colors</button>
    </div>
  );
}