"use client"; //ensures client-side rendering
import { useState } from "react"; //imports React's useState hook

export default function Counter() {
  const [count, setCount] = useState(0); //defines a state variable 'count' with initial value 0

  return (
    <div>
      <h3>Counter: {count}</h3> //displays the current counter value
      <button onClick={() => setCount(count + 1)}>Increase</button> //increments count
      <button onClick={() => setCount(count - 1)}>Decrease</button> //decrements count
    </div>
  );
}