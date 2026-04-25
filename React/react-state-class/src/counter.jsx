import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);
  console.log("Counter component rendered");
  console.log(`Current count: ${count}`);

  
  let incCount = () => {
    console.log(`Inside count: ${count}`);
    setCount(count + 1);
  };

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={incCount}>Increase Count</button>
    </div>
  );
}
