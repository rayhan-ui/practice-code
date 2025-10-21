import { useState } from "react";

export default function Count(){
  const [count, setCount] = useState(0);

  return(
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>like: {count}</h1>
      <button
        onClick={() => setCount(prev => prev + 1)}
        style={{
          padding: "10px 20px",
          margin: "5px",
          backgroundColor: "#2ecc71",
          border: "none",
          borderRadius: "5px",
          color: "white",
          cursor: "pointer",
        }} 
        >Like</button>
      <button disabled ={count<1} 
      onClick={() => setCount(prev => prev - 1)}
      style={{
          padding: "10px 20px",
          margin: "5px",
          backgroundColor: count < 1 ? "#ccc" : "#e74c3c",
          border: "none",
          borderRadius: "5px",
          color: "white",
          cursor: "pointer",
        }} >Dislike</button>
          </div>
  )
}