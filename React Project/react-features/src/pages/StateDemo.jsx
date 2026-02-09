import { useState } from "react";

export default function StateDemo() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: 16 }}>
      <h2>State + Events</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
      <button onClick={() => setCount((c) => c - 1)} style={{ marginLeft: 8 }}>
        -1
      </button>
      <button onClick={() => setCount(0)} style={{ marginLeft: 8 }}>
        Reset
      </button>

      <hr style={{ margin: "16px 0" }} />

      <p>
        <b>What you learned:</b> <code>useState</code> stores UI state, and events
        update state to re-render the UI.
      </p>
    </div>
  );
}
