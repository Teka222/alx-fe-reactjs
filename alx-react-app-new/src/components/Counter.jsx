import React, { useState } from 'react';

function Counter() {
  // Initialize state for the counter
  const [count, setCount] = useState(0);

  // Render the counter with buttons
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ margin: '0 10px' }}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
