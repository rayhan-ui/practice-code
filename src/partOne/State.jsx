import { useState } from "react";

export default function State() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      textAlign: "center",
      background: "#222f3e",
      color: "#fff",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <h1>Counter App</h1>
      <h2>Count: {count}</h2>

      <div style={{ display: "flex", gap: "5px", marginBottom: "5px" }}>
        <button onClick={() => setCount(prev => prev + 1)}>+</button>
        <button onClick={() => setCount(prev => prev - 1)}>-</button> 
      </div>
        <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
