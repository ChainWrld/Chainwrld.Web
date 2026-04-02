import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>CHAINWRLD 💎</h1>
      <p>Your website is now working 🎉</p>

      <button onClick={() => setCount(count + 1)}>
        Clicks: {count}
      </button>
    </div>
  );
}
