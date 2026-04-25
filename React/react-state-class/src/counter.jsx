import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0); //Initialization

  let incCount = () => {
    setCount((currentCount) => {
      return currentCount + 1;
    });
    setCount((currentCount) => {
      return currentCount + 1;
    });
  };

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={incCount}>Increase Count</button>
    </div>
  );
}
