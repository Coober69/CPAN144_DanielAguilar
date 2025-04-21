//CPAN 144 - FINAL EXAM - Daniel Aguilar
//Components > Counter.jsx

'use client';
import { useState } from 'react';

/**
Counter component with increment/decrement/reset functionality
 - Shows conditional rendering when count is zero
**/

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
        <button onClick={() => setCount(c => c - 1)}>Decrement</button>
        <span style={{ fontSize: '1.2em', fontWeight: 'bold' }}>{count}</span>
        <button onClick={() => setCount(c => c + 1)}>Increment</button>
      </div>
      <button onClick={() => setCount(0)}>Reset</button>
      {count === 0 && (
        <p style={{ color: 'gray', marginTop: '10px' }}>The counter is at zero!</p>
      )}
    </div>
  );
};

export default Counter;